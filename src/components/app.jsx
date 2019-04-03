import React, { Component } from 'react';

import SearchBar from './search-bar';
import Gif from './gif';
import GifList from './gif-list';

class App extends Component {
  render() {
    // const gifs = [
    //   { id: "l41YxdIcDU58r5CDK" },
    //   { id: "l2SpPvzFidEyGwq2Y" }
    // ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="l41YxdIcDU58r5CDK" />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
