import React, { Component } from 'react';
// import logo from './logo.svg';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';
import './App.css';

const films = TMDB.films

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }
  // handleFaveToggle
  handleFaveToggle(film){
    // make a copy of the array
    const faves = this.state.faves.slice()
    // find the index of the film passed
    const filmIndex = faves.indexOf(film)
    // if film is found
    if (filmIndex !== -1){
      // the film is already favoed
      faves.splice(filmIndex, 1)
      console.log('removing a favo ' + film.title)
    } else {
      // the film needs to be added to faves array
      faves.push(film)
      console.log('adding a favo ' + film.title)
    }
    // now youre ready to set state
    this.setState({faves})
  }
  // handleDetailsClick
  handleDetailsClick = (film) => {
    console.log('fetching details for ' + film.title)
    this.setState({
      current: film
    })
  }

  render() {
    return (
      <div className="film-library">
        {/* testing...!!!
          <FilmDetails title={films[0].title}/>
          */}
        {/* refactor...!!!
          <FilmListing films={films}/>
          <FilmDetails films={films}/>
          */}
        <FilmListing faves={this.state.faves} onDetailsClick={this.handleDetailsClick} onFaveToggle={this.handleFaveToggle} films={this.state.films}/>
        <FilmDetails film={this.state.current} />
      </div>
    );
  }
}

export default App;
