import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='Information f3'>
        {'This Face Scanner will detect faces in your pictures. Give it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='DetectURL f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
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