import React, { Component } from 'react';


class Gif extends Component {
  render(){
    const src = `https://media0.giphy.com/media/${this.props.id}/200w.webp?cid=790b76115ca3ea2366524b3832233adf`;
    return (
      <img className="gif" src={src}></img>
    );
  }
}

export default Gif;
