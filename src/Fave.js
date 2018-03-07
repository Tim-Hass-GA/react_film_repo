import React, { Component } from 'react';

class Fave extends Component {
  constructor(props){
    super(props)
    this.state = {
      isFave: false
    }
    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (e) => {
    e.stopPropagation()
    console.log('click on favs')
    this.setState({
      isFave: !this.state.isFave
    })
  }
  render (){
    const isFave = (this.state.isFave) ? 'remove_from_queue':'add_to_queue'

    return (
      <div className={"film-row-fave " + isFave} onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}

export default Fave;
