import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://i.giphy.com/media/${this.props.id}/giphy.webp/200.gif`
    return (
      <img src={src} alt="gif" className="gif"/>
    )
  }
}

export default Gif;