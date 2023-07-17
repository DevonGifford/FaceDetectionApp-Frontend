import React from 'react'

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsPersonVcardFill } from 'react-icons/bs';

const AboutDeveloper = () => {
  return (
    <div className='pb3'>
        <p className='ml7 mr7'>
          Hello! I'm Devon Gifford, a full stack developer driven by a passion for continuous learning and problem-solving. With a solid background in front-end and back-end development, I specialize in crafting user-friendly and responsive web applications using React and its ecosystem.
          <br/><br/>
          My journey into web development began during my time as a freelancer, creating websites for marketing clients in South Africa. Since then, I've had the opportunity to work in QA for a major FAANG company in Europe, where I discovered my true passion for problem-solving.
          <br/><br/>
          Combining my technical skills, creativity, and a keen eye for detail, I strive to deliver innovative solutions that meet client needs and exceed expectations. I am excited to contribute my expertise to collaborative projects and continue expanding my knowledge in this ever-evolving field.
          Let's create something amazing together!
          <br/><br/>
        </p>

        <ul className="list pl0 flex justify-around ">
          
          <li>
            <a href='https://www.linkedin.com/in/dbgifford/' target='_blank' className='f2 white justify-center hover-white hover-green pointer no-underline'>
              <FaLinkedin /><br/>LinkedIn
            </a>
          </li>

          <li>
            <a href='https://devongifford.vercel.app/' target='_blank' className='f2 white justify-center hover-white hover-green pointer no-underline'>
              <BsPersonVcardFill /><br/>Portfolio
            </a>
          </li>
          
          <li>
            <a href='https://github.com/DevonGifford' target='_blank' className='f2 white justify-center hover-white hover-green pointer no-underline'>
              <FaGithub /><br/>GitHub
            </a>
          </li>

        </ul>
    </div>
  )
}

export default AboutDeveloper