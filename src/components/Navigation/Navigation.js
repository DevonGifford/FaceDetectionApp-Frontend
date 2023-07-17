import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ onRouteChange, isSignedIn }) => {
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
            <p onClick={() => onRouteChange('signout')} className='f3 link dim white underline pa3 pointer' id='signin'>
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