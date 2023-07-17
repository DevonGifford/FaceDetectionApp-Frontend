import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/AboutPage/About';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

import './App.css';
import ParticlesComponent from './components/Particles/ParticlesBackground';
//import Clarifai from 'clarifai';

// let config = {
// //Configuration for our particle effect background
//   num: [0.1, 999],
//   rps: 0.3,
//   radius: [5, 40],
//   life: [1, 3],
//   v: [0.1, 3],
//   tha: [-40, 40],
//   rotate: [0, 20],
//   alpha: [0.6, 0],
//   scale: [0.1, 0.1],
//   position: {width:500, height:999}, 
//   cross: "cross", 
//   random: 3, 
//   g: 8,  
//   f: [2, -1], 
//   onParticleUpdate: (ctx, particle) => {
//       ctx.beginPath();
//       ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
//       ctx.fillStyle = particle.color;
//       ctx.fill();
//       ctx.closePath();
//   }
// };

//🎯 TEST IF IT WORKS WITHOUT PAT
// const app = new Clarifai.App({
//   apiKey: '995a8ba49af14bf7be04d5d2a8dda63b'     //Please insert your own API key here....
//  });

const initialState = { 
    input: '',
    imageUrl: '',
    boxes: [],
    route: 'signin',    
    isSignedIn: false,   
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    }
}

const DevelopmentState = { 
  input: '',
  imageUrl: '',
  boxes: [],
  route: 'home',      
  isSignedIn: true,   
  user: {
    id: '69',
    name: 'Developer',
    email: 'developer@gmail.com',
    entries: 420,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = DevelopmentState;  //🎯DEVELOPMENT - CHANGE BACK TO: initialState
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocations = (data) => {
    return data.outputs[0].data.regions.map(face => {
      const clarifaiFace = face.region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      //console.log(width, height); 
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
    }
    });
  }

  displayFaceBox = (boxes) => {
    this.setState({boxes: boxes});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    this.displayFaceBox([]);  //🎯🎯🎯 DEVELOPMENT - DELETE THIS LINE
    //🎯🎯🎯 DEVELOPMENT - UNCOMENT BELOW
    //   fetch('https://devon-facedetection-app.onrender.com/imageurl', {
    //     method: 'post',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //       input: this.state.input
    //     })
    // })
    // .then(response => response.json())
    // .then(response => {
    //   //console.log('hi', response)
    //   if (response) {
    //     fetch('https://devon-facedetection-app.onrender.com/image', {
    //       method: 'put',
    //       headers: {'Content-Type': 'application/json'},
    //       body: JSON.stringify({
    //         id: this.state.user.id
    //       })
    //     })
    //       .then(response => response.json())
    //       .then(count => {
    //         this.setState(Object.assign(this.state.user, { entries: count}))
    //       })
    //       .catch(console.log);
    //   }
    //   this.displayFaceBox(this.calculateFaceLocations(response))
    // })
    // .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(DevelopmentState);     //🎯DEVELOPMENT - CHANGE BACK TO: initialState
    } else if (route === 'home') {       
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, boxes } = this.state;
    return (
      <div className="App">
        
        {/* <ParticlesBg 
          className="particles" 
          type="cobweb" 
          color="#FFFFFF" 
          config={config} 
          bg={true} 
        /> */}

        <ParticlesComponent />
        
        <Router>
        
          <Navigation 
            isSignedIn={isSignedIn} 
            onRouteChange={this.onRouteChange} 
          />

          <Routes>

            {/* Render the Signin page component */}
            <Route path="/signin" element={<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />} />
            
            
            {/* Render the Register page component */}
            <Route path="/register" element={<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />} />


            {/* Render the Home page components */}
            <Route path="/" element={<Home user={this.state.user} onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} boxes={boxes} imageUrl={imageUrl}/>} />
            
            
            {/* Render the About page component */}
            <Route path="/about" element={<About />} />      
            

          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
