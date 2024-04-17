import { Routes, Route, Link } from 'react-router-dom';
import HighestRatedMovieList from "./components/highestRatedMoviesList";
import PopularMoviesList from "./components/popularMoviesList";
import MovieImg from './assets/movie_black2.jpg';
import Home from './components/home';
import FilmSearch from './components/filmSearch';
import FilmListe from './components/filmListe';
import TvShowsList from './components/tvShows';
import UpComing from './components/upComing';
import GenreSelector from './components/genreSelector';
// import RandomMovieSelector from './components/randomMovieSelector ';
function App() {
  return (
    <div>
      <div className="jumbotron pb-3 pt-3">
        <div className="navbar navbar-expand-lg">
          <nav className="nav navbar-nav">    
            <Link to='/' className="nav-item nav-link">Home</Link>
            <Link to='/popular' className="nav-item nav-link">Popular</Link>
            <Link to='/highest-rated' className="nav-item nav-link">Highest Rated</Link>
            <Link to='/Tv-Shows' className="nav-item nav-link">TV Shows</Link>
            <Link to='/upcomming' className="nav-item nav-link">Upcomming Tv-Series</Link>
            <FilmSearch className="nav-item"/>
          </nav>
        </div>
          <span className='h1'>React Moviefinder <img className="rounded movie_img m-3" src={MovieImg} width="75" height="75"/></span>
      <span className="d-flex justify-content-between p-0">This small App demonstrates React, Redux-Toolkit, RTK Query and React-Router</span>
        </div>
        <Routes>
            <Route path='/' element={<Home/>} />  
            <Route path='/popular' element={<PopularMoviesList/>} />    
            <Route path='/highest-rated' element={<HighestRatedMovieList/>} />
            <Route path='/Tv-Shows' element={<TvShowsList/>} />
            <Route path= '/searchedMovie' element={<FilmListe/>}/> 
            <Route path="/upcomming" element={<UpComing />} />
        </Routes>
    </div>
  );
}
  export default App;