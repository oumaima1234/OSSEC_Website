import React, { Component } from 'react';
import "../node_modules/video-react/dist/video-react.css";
import './App.css';
import { Player } from 'video-react';

class App extends Component {
  render() {
    return (
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        fluid={false}
        width={480}
        height={272}
      />
    );
  }
}

export default App;
