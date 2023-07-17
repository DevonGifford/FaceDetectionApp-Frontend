import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex',  justifyContent: 'space-between', padding: '2px 20px 2px', zIndex: '1'}}>
          {/* LEFT HALF */}
          <div className='flex items-start'>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim white underline pa3 pointer' id='signin'>About</p>
          </div>
          {/* RIGHT HALF */}
          <div className='flex items-end '>
            <p onClick={() => onRouteChange('signout')} className='f3 link dim white underline pa3 pointer' id='signin'>Sign Out</p>
          </div>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end', padding: '2px 20px 2px'}}>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim white underline pa3 pointer' id='signin'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim white underline pa3 pointer' id='register'>Register</p>
        </nav>
      );
    }
}

export default Navigation;