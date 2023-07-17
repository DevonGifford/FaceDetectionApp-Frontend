import React from 'react'

import Logo from '../Logo/Logo'
import Rank from '../Rank/Rank'
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm'
import FaceRecognition from '../FaceRecognition/FaceRecognition'

const Home = ({ 
    user, 
    onInputChange, 
    onButtonSubmit, 
    boxes, 
    imageUrl 
}) => {
  return (
    <div className='z-2'>
        
        <Logo />
              
        <Rank
            name={user.name}
            entries={user.entries}
        />
        
        <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
        />
        
        <FaceRecognition 
            boxes={boxes} 
            imageUrl={imageUrl} 
        />

    </div>
  )
}

export default Home