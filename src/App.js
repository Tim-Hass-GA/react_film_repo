import React, { Component } from 'react';
// import logo from './logo.svg';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';
import './App.css';
const films = TMDB.films

class App extends Component {
  render() {
    return (
      <div className="film-library">
        {/*<FilmDetails title={films[0].title}/>*/}
        <FilmListing films={films}/>
        <FilmDetails films={films}/>
      </div>
    );
  }
}

export default App;
