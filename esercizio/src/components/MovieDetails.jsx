import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieDetails = () => {
    const params = useParams()
    console.log(params)


    const prendiFilm = () => {
        fetch('http://www.omdbapi.com/?apikey=5eba5f0f&i=' + params.movieId)
            .then((response) => {
                console.log(response)
                response.json()
            })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err, 'ERRORE!')
            })
    }

    prendiFilm()

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    data
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default MovieDetails