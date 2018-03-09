import React, { Component } from 'react';

class Fave extends Component {
  // STEP 1 - refactor to move up the tree and lift to the APP js
  // constructor(props){
  //   super(props)
    // this.state = {
    //   isFave: false
    // }
    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this)
  // }
  handleClick = (e) => {
    e.stopPropagation()
    console.log('handling a click on favs')
    // STEP 2 - refactor to move up the tree and lift to the APP js
    // this.setState({
    //   isFave: !this.state.isFave
    // })
    this.props.onFaveToggle()
  }
  render (){
    // STEP 3 - refactor to move up the tree - we can no longer use state.
    // const isFave = (this.state.isFave) ? 'remove_from_queue':'add_to_queue'
    const isFave = (this.props.isFave) ? 'remove_from_queue':'add_to_queue'

    return (
      <div className={"film-row-fave " + isFave} onClick={this.handleClick}>
        <p className="material-icons">{isFave}</p>
      </div>
    )
  }
}

export default Fave;
