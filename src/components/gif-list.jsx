import React, { Component } from 'react';
import Gif from './gif';


class GifList extends Component {
  render() {
    const gifs = [
      { id: "l41YxdIcDU58r5CDK" },
      { id: "l2SpPvzFidEyGwq2Y" }
    ];
    return (
      <div>
        <Gif id={gifs[0].id} />
        <Gif id={gifs[1].id} />
      </div>
    );
  }
}

export default GifList;


// gifs.forEach((gif) => {
//   return <Gif id={gif.id} />;
// });
