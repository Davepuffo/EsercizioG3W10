import { Component, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import { Link } from "react-router-dom";


const ListFilm = ({ query, title }) => {

    const [ListaFilm, setListaFilm] = useState([])
    const [IsLoading, setIsLoading] = useState(true)
    const [IsError, setIsError] = useState(false)

    const prendiFilm = () => {
        fetch('http://www.omdbapi.com/?apikey=5eba5f0f&s=' + query)
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                setListaFilm(data.Search)
                setIsLoading(false)

            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false)
                setIsError(true)
            });
    }

    useEffect(() => {
        prendiFilm()
    }, [])


    return (
        <Container>
            {IsError && (
                <Alert variant="danger">Qualcosa è andato storto!</Alert>
            )}
            {IsLoading && (
                <div className="text-center">
                    <Spinner animation="border" role="status" variant="success">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
            <h2 className="text-white text-start">{title}</h2>
            <Row className="mb-2 justify-content-center">
                {
                    ListaFilm.map((film) => (
                        <Col xs={6} md={3} lg={2} className="film111 me-2" key={film.imdbID}>
                            <Card className="w=25">
                                <Link to={'/details/' + film.imdbID}>
                                    <Card.Img src={film.Poster} />
                                </Link>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container >
    )
}


export default ListFilm