import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  constructor(props){
    super(props)
    this.state = {
      filter: 'all'
    }
  }
  handleFilterClick = (filter) => {
    console.log('filtering choices' + filter);
    this.setState({
      filter: filter
    })
  }
  render(){
    const {films} = this.props
    const allFilter = (this.state.filter === 'all' ? 'is-active' : '')
    const faveFilter = (this.state.filter === 'faves' ? 'is-active' : '')
    let allFilms = films.map(function(film, index){
      return <FilmRow key={film.id} title={film.title} date={film.release_date} url={film.poster_path}/>
    })
    return(
      <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
              <div className={"film-list-filter " + allFilter} onClick={() => this.handleFilterClick('all')}>
                  <span>ALL</span>
                  <span className="section-count">{this.props.films.length}</span>
              </div>
              <div className={"film-list-filter " + faveFilter} onClick={() => this.handleFilterClick('faves')}>
                  <span>FAVES</span>
                  <span className="section-count">0</span>
              </div>
          </div>
          {allFilms}
      </div>
    )
  }
}

export default FilmListing;
