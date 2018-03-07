import React, { Component } from 'react';

class FilmPoster extends Component {
  render(){
    const {url, title} = this.props
    const posterUrl = "https://image.tmdb.org/t/p/w780/" + url
    return(
      <img src={posterUrl} alt={title} />
    )
  }
}
export default FilmPoster;
