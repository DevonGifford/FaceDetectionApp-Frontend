import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../Logo/Logo'

import './Register.css'


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://devon-facedetection-backend.onrender.com/register', {
    fetch('https://devon-facedetection-backend.onrender.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.navigate('/');
        }
      })
  }

  onLoginButtonClick = () => {
    // Navigate to the register page
    this.props.navigate('/');
  };

  render() {
    return (
      <article className="br3 bg-black-80 ba b--white-80 mv4 w-100 w-60-m w-0-l mw6 shadow-5 center">
        
        <main className="pa4" id='signin-form'>
        
      <article className="br3 bg-black-80 ba b--white-80 mv4 w-100 w-60-m w-0-l mw6 shadow-5 center">
        
        <main className="pa4" id='signin-form'>
        
          <div className="measure">

            
            <Logo />
            <p className='fw6 f3 pb3 dark-gray'>
              Face Detection App
            </p>
            

            {/* DATA ENTRY FORMS */}

            
            <Logo />
            <p className='fw6 f3 pb3 dark-gray'>
              Face Detection App
            </p>
            

            {/* DATA ENTRY FORMS */}
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0 white">Create a new account</legend>

              {/* USERNAME */}
              <legend className="f3 fw6 ph0 mh0 white">Create a new account</legend>

              {/* USERNAME */}
              <div className="mt3">
                <label className="db fw6 lh-copy f4 white" htmlFor="name">Name</label>
                <label className="db fw6 lh-copy f4 white" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-dark-gray hover-bg-black hover-white w-100 white"
                  className="pa2 input-reset ba bg-dark-gray hover-bg-black hover-white w-100 white"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>

              {/* EMAIL */}

              {/* EMAIL */}
              <div className="mt3">
                <label className="db fw6 lh-copy f4 white" htmlFor="email-address">Email</label>
                <label className="db fw6 lh-copy f4 white" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-dark-gray hover-bg-black hover-white w-100 white"
                  className="pa2 input-reset ba bg-dark-gray hover-bg-black hover-white w-100 white"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>

              {/* PASSWORD */}

              {/* PASSWORD */}
              <div className="mv3">
                <label className="db fw6 lh-copy f4 white" htmlFor="password">Password</label>
                <label className="db fw6 lh-copy f4 white" htmlFor="password">Password</label>
                <input
                  className="pa2 input-reset ba bg-dark-gray hover-bg-black hover-white w-100 white"
                  className="pa2 input-reset ba bg-dark-gray hover-bg-black hover-white w-100 white"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>


            </fieldset>


            {/* SUBMIT BUTTON */}
            <div className="pb4">
              <button


            {/* SUBMIT BUTTON */}
            <div className="pb4">
              <button
                onClick={this.onSubmitSignIn}
                className="demo-btn bg-white ma-2 white w-100 tc pv3 rounded f5 fw-bold"
                className="demo-btn bg-white ma-2 white w-100 tc pv3 rounded f5 fw-bold"
                type="submit"
                value="Sign in"
              >
                Create new Account
              </button>
            </div>


            <p className="white">Already have an account?</p>

            {/* REGISTER BUTTON */}
            <div className="pt2">
              <button 
                type='button'
                onClick={() => onRouteChange('signin')} 
                className="demo-btn bg-white ma-2 white w-100 tc pv3 rounded f5 fw-bold"
              >
                Log in
              </button>

            </div>






          </div>
        
        
        </main>
      
      
      </article>
    );
  }
}

export default function RegisterWrapper(props) {
  const navigate = useNavigate();
  return <Register {...props} navigate={navigate} />;
}