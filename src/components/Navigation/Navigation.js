import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo'

const Navigation = ({ onRouteChange, isSignedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    // Update the route to the sign-in page & Update the state to use the initialState
    onRouteChange('signout');
    
    // Or use the navigate function to go to the sign-in page
    navigate('/');
  };

  if (isSignedIn) {
    const showReturnButton = location.pathname === '/about';
    const showAboutButton = location.pathname === '/'

    return (
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 20px 2px', zIndex: '1' }}>
        {/* LEFT HALF */}
        <div className='flex items-start'>

          {showAboutButton && (
            <Link to="/about" className='f3 link dim white pa3 pt4 pointer hover-green b' id='signin'>
              About
            </Link>

          )}

          {/* Button to go back */}
          {showReturnButton && (
            <div 
              onClick={() => { navigate(-1); console.log('nav-1');} } 
              className='pt3 pointer flex items-center'
              id='signin'
            >
              <Logo height="80px" width="80px" />
              {/* <p className='white'>go back</p> */}
            </div>
          )}

        </div>
        {/* RIGHT HALF */}
        <div className='flex items-end'>
          <p 
            onClick={handleSignOut} 
            className='f3 link dim white pa3 pointer hover-green b' 
            id='signin'
          >
            Sign Out
          </p>
        </div>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end', padding: '2px 20px 2px', gap: '10px' }}>
        <Link to="/" className='f3 link dim white hover-green b pa3 pointer' id='signin'>
          Sign In
        </Link>
        <Link to="/register" className='f3 link dim white hover-green b pa3 pointer' id='register'>
          Register
        </Link>
      </nav>
    );
  }
}

export default Navigation;
