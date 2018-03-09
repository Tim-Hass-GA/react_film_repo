import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {

  render(){
    const {title, date, key, url} = this.props
    const posterUrl = "https://image.tmdb.org/t/p/w780/" + url
    const year = new Date(date).getFullYear()
    return(
      <div className='film-row' onClick={this.props.onDetailsClick}>
      <FilmPoster title={title} url={url} />
      <div className='film-summary'>
      <h1>{title}</h1>
      <p>{year}</p>
      </div>
      {/* refactor ...! */}
      <Fave isFave={this.props.isFave} onFaveToggle={this.props.onFaveToggle} />
      </div>
    )
  }
}
export default FilmRow;
