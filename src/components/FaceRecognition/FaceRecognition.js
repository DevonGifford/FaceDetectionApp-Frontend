import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt4'>
        
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
         {boxes.map(box => { 
          return <div 
            className='bounding-box' 
            key={boxes.index}
            style={{
              top: box.topRow, 
              right: box.rightCol, 
              bottom: box.bottomRow, 
              left: box.leftCol
            }}
          ></div>
          }) 
        } 

      </div>
    </div>
  );
}

export default FaceRecognition;
