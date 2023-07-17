import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../Logo/Logo'
import './Signin.css'

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://devon-facedetection-backend.onrender.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          // this.props.navigate('/home');
          // this.props.onRouteChange('home');
        }
      })
  }

  onDemoAccountLogin = () => {
    const demoEmail = "guest@gmail.com"
    const demoPassword = "Guest@123"

    this.setState({
      signInEmail: demoEmail,
      signInPassword: demoPassword,
    })

    fetch("https://devon-facedetection-backend.onrender.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: demoEmail,
        password: demoPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user)
          // this.props.navigate('/home');
          // this.props.onRouteChange("home")
        }
        
      })
  }

  onRegisterButtonClick = () => {
    // Navigate to the register page
    this.props.navigate('/register');
  };

  render() {
    const { onRouteChange } = this.props;

    return (
      <article className="br3 bg-black-80 ba b--white-80 mv4 w-100 w-60-m w-0-l mw6 shadow-5 center">
        
        <main className="pa4" id='signin-form'>
         
          <div className="measure">

            <Logo />
            <p className='fw6 f3 pb3 dark-gray'>
              Face Detection App
            </p>


            {/* DATA ENTRY FORMS */}
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0 white">Sign-in to your account</legend>
              
                {/* EMAIL INPUT */}
                <div className="mt3">
                  <label className="db fw6 lh-copy f4 white" htmlFor="email-address">Email</label>
                  <input
                    className="pa2 input-reset ba bg-dark-gray hover-bg-black hover-white w-100 white"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>

                {/* PASSWORD INPUT */}
                <div className="mv3">
                  <label className="db fw6 lh-copy f4 white" htmlFor="password">Password</label>
                  <input
                    className="pa2 input-reset ba bg-dark-gray hover-bg-black hover-white w-100 white"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>

            </fieldset>
            

            {/* SUBMIT BUTTON */}
            <div className="pb5">
              <button
                onClick={this.onSubmitSignIn}
                className="demo-btn bg-white ma-2 white w-100 tc pv3 rounded f5 fw-bold"
                type="submit"
                value="Sign in"
              >
                SUBMIT
              </button>
            </div>
            
            {/* DEMO BUTTON */}
            <button
                type="button"
                className="demo-btn bg-white ma-2 white w-100 tc pv3 rounded f5 fw-bold"
                onClick={this.onDemoAccountLogin}
              >
                Demo without an Account
            </button>

            <p className="white">- or -</p>

            {/* REGISTER BUTTON */}
            <div className="lh-copy mt3 z-2 ">
              <button 
                type='button'
                onClick={this.onRegisterButtonClick} //{() => onRouteChange('register')}
                className="demo-btn bg-white ma-2 white w-100 tc pv3 rounded f5 fw-bold"
              >
                Create an account
              </button>

            </div>


          </div>

        </main>

      </article>
    );
  }
}

export default function SigninWrapper(props) {
  const navigate = useNavigate();
  return <Signin {...props} navigate={navigate} />;
}