import React, { Component } from 'react';
import './video.scss';
import { Player } from 'video-react';

class App extends Component {
  render() {
    return (
      <Player
	playsInline
	muted={true}
	autoPlay={true}
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        fluid={false}
       	width="100%" //650
        height="100%" //600
      />
    );
  }
}

export default App;


