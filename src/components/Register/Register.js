import React from 'react';

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
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    return (
      <article className="br3 bg-black-80 ba b--white-80 mv4 w-100 w-60-m w-0-l mw6 shadow-5 center">
        
        <main className="pa4 white-80">
        
          <div className="measure">
            

            {/* DATA ENTRY FORMS */}
            <fieldset id="sign_up" className="ba b--black ph0 mh0 white">
              <legend className="f1 fw6 ph0 mh0">Register</legend>

              {/* USERNAME */}
              <div className="mt3">
                <label className="db fw6 lh-copy f6 white" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>

              {/* EMAIL */}
              <div className="mt3">
                <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>

              {/* PASSWORD */}
              <div className="mv3">
                <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>

            </fieldset>


            {/* SUBMIT BUTTON */}
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--white bg-light-green-30 grow pointer f5 dib"
                type="submit"
                value="Register"
              />
            </div>


          </div>
        
        </main>
      
      </article>
    );
  }
}

export default Register;