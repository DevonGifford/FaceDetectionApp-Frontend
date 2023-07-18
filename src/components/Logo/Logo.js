import React from 'react'; 
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = ({ height, width}) => {
  return (
    <div className='flex justify-center ma4 mt0 '>
      <Tilt 
        className="Tilt br2 shadow-2" 
        options={{ max : 55 }} 
        style={{ height, width }}
      >
      
        <div className="Tilt-inner pa1">
          <img style={{paddingTop: '0px'}} alt='logo' src={brain}/>
        </div>
      
      
      </Tilt>
    </div>
  );
}


// Set default values for height and width props
Logo.defaultProps = {
  height: "150px", // Default height if not provided
  width: "150px",  // Default width if not provided
};

export default Logo;