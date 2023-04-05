import ListFilm from "./ListFilm"
import Title from "./Title"

const Home = () => {
    return (
        <div>
            <Title />
            <ListFilm query="star%20wars" title="Star Wars" />
            <ListFilm query="lord%20of%20the%20rings" title="Il Signore degli Anelli " />
            <ListFilm query="harry%20potter" title="Harry Potter" />
        </div>
    )
}

export default Home