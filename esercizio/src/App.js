import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import TvShows from './components/TvShows';
import MovieDetails from './components/MovieDetails';


function App() {
  return (
    <BrowserRouter>
      <div className="App bg-dark">
        <MyNavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tv-shows' element={<TvShows />} />
          <Route path='/details/:movieId' element={<MovieDetails />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
