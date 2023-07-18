import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  console.log('FaceRecognition component runs - here are my boxes:', boxes);
  return (
    <div className='center ma'>
      <div className='absolute mt4'>
        
        <img 
          id='inputimage' 
          alt='facescan-image' 
          src={imageUrl} 
          width='500px' 
          height='auto'
        />

        {Array.isArray(boxes) && boxes.map(box => (
          <div 
            className='bounding-box z2'
            key={`box${box.topRow}${box.rightCol}`} 
            style={{
              top: box.topRow, 
              right: box.rightCol, 
              bottom: box.bottomRow, 
              left: box.leftCol,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default FaceRecognition;