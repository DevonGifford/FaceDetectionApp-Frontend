import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Update the route to the sign-in page & Update the state to use the initialState
    onRouteChange('signout');
    
    // Or use the navigate function to go to the sign-in page
    navigate('/');
    
  };

  const navigate = useNavigate();

  const handleSignOut = () => {
    // Update the route to the sign-in page & Update the state to use the initialState
    onRouteChange('signout');
    
    // Or use the navigate function to go to the sign-in page
    navigate('/');
    
  };

    if (isSignedIn) {
      return (

        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 20px 2px', zIndex: '1' }}>
          
          
          {/* LEFT HALF */}
          <div className='flex items-start'>
            <Link to="/about" className='f3 link dim white underline pa3 pointer' id='signin'>
              About
            </Link>
          </div>
          
          {/* RIGHT HALF */}
          <div className='flex items-end'>
            <p onClick={handleSignOut} className='f3 link dim white underline pa3 pointer' id='signin'>
              Sign Out
            </p>
          </div>


        </nav>
      );
    } else {
      return (

        <nav style={{ display: 'flex', justifyContent: 'flex-end', padding: '2px 20px 2px' }}>

          <Link to="/" className='f3 link dim white underline pa3 pointer' id='signin'>
            Sign In
          </Link>

          <Link to="/register" className='f3 link dim white underline pa3 pointer' id='register'>
            Register
          </Link>

        </nav>
      );
    }
}

export default Navigation;