import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

let config = {
  num: [0.1, 999],
  rps: 0.3,
  radius: [5, 40],
  life: [1, 3],
  v: [0.1, 3],
  tha: [-40, 40],
  // body: "./img/icon.png", // Whether to render pictures
  rotate: [0, 20],
  alpha: [0.6, 0],
  scale: [0.1, 0.1],
  position: {width:500, height:999}, // all or center or {x:1,y:1,width:100,height:100}
  cross: "cross", // cross or bround
  random: 3,  // or null,
  g: 8,    // gravity
  f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticlesBg className="particles" type="cobweb" color="#FFFFFF" config={config} bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />


          {/* {
        <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
