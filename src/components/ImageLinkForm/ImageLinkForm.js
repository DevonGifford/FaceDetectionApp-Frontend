import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className='z2'>
      
      {/* Mini Heading */}
      <p className='Information f3 pt2'>
        This Face Scanner will detect faces in your pictures. Give it a try.
      </p>
      
      {/* DATA & SUBMIT */}
      <div className='center'>
        <div className='form center pa4 br3 shadow-5 z-2'>
          
          {/* ENTER THE URL */}
          <input 
            className='DetectURL f4 pa2 w-70 center' 
            type='text' 
            placeholder='enter image URL'
            onChange={onInputChange}
          />
          
          {/* SUBMIT BUTTON */}
          <button
            className='DetectButton w-30 grow f4 link ph3 pv2 dib black'
            onClick={onButtonSubmit}
          >Detect</button>

        </div>      
      </div>

    </div>
  );
}

export default ImageLinkForm;