import React from "react";
import Logo_example from './Logo_example.jpg'
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return(
        <div className="container ma4 mt0">
            <Tilt gyroscope={true} tiltMaxAngleX={45} tiltMaxAngleY={45}>
                <div className="Tilt-inner pa3">
                    <img src={Logo_example} className="inner-element" alt="pic" />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;