import React, { Component } from 'react';

class SearchBar extends Component {
  render(){
    return (
      <div className="form-search">
        <input type="text" class="form-control" placeholder="Find gif"></input>
      </div>
    )
  }
}

export default SearchBar;
