import React from 'react'

import { FaGithub } from 'react-icons/fa'


const AboutProject = () => {
  return (
    <div className='pb4'>
      <p className='ml7 mr7'>
        Welcome to the Face Recognition Web App! <br/> This web application utilizes the power of Clarifai's <strong>deep learning AI</strong> platform to detect and locate human faces in images. With its user-friendly interface and <strong>integrated authentication system</strong>, this app provides a seamless experience for users to upload images, detect faces, and track their ranking.
        <br/><br/>
        This project is built using the <strong>PERN stack</strong>, a powerful combination of PostgreSQL, ExpressJS, ReactJS, and NodeJS. PostgreSQL serves as the open-source relational SQL database, ExpressJS is the backend web application framework, ReactJS powers the frontend, and NodeJS provides the runtime environment.
        <br/><br/>
        The project is <strong>hosted on Render.com</strong>, utilizing its platform to deploy and manage the front-end, back-end, and PostgreSQL database components of the application, ensuring reliable and scalable hosting infrastructure
        <br/><br/>
        <strong>Additionally, the project integrates several other technologies and libraries to enhance the user experience:</strong>
        <br/><br/>
      </p>

      {/* <h2 className='underline'>Tech used in this project</h2> */}

      <div className='flex flex-row justify-center'>

        <div className='w-third mr5 ba bw2 b--white pb4'>
          <h3 className='underline'>Frontend </h3>
          <ul className="list pl0 flex justify-around flex-column ma4">
            <li>
              <a href='https://legacy.reactjs.org/docs/react-dom.html' target='_blank' className="f3 white justify-center hover-white hover-green pointer no-underline">ReactJS</a>
            </li>

            <li>
              <a href='https://www.javascript.com/' target='_blank' className="f3 white justify-center hover-white hover-green pointer no-underline">JavaScript</a>
            </li>

            <li>
              <a href='https://www.clarifai.com/' target='_blank' className="f3 white justify-center hover-white hover-green pointer no-underline">Clarifai</a>
            </li>

            <li>
              <a href='https://tachyons.io/' target='_blank' className="f3 white justify-center hover-white hover-green pointer no-underline">Tachyons</a>
            </li>

            <li>
              <a href='https://www.npmjs.com/package/react-parallax-tilt' target='_blank' className="f3 white justify-center hover-white hover-green pointer no-underline">React-Parallax</a>
            </li>

            <li>
              <a href='https://particles.js.org/' target='_blank' className="f3 white justify-center hover-white hover-green pointer no-underline">TSParticles</a>
            </li>

            <li>
              <a href='https://legacy.reactjs.org/docs/react-dom.html' target='_blank' className="f3 white justify-center hover-white hover-green pointer no-underline">React-dom</a>
            </li>

          </ul>
          <button className='mt1 mb1 pt2 pb2 pr3 pl3'>
            <a href='https://github.com/DevonGifford/FaceDetectionApp-Frontend'target='_blank' className='no-underline'>
              <FaGithub /> Repo
            </a>
          </button>
        </div>


        <div className='w-third ml5 ba bw2 b--white pb4'>
          <h3 className='underline'>Backend  </h3>
          <ul className="list pl0 flex justify-around flex-column ma4 white">
            <li>
              <a href='https://nodejs.org/en' target='_blank' className="f3 white justify-center hover-white hover-green pointer no-underline">NodeJS</a>
            </li>

            <li>
              <a href='https://expressjs.com/' target='_blank' className="f3 white justify-center hover-white hover-green pointer no-underline">ExpressJS</a>
            </li>

            <li>
              <a href='https://restfulapi.net/' target='_blank' className="f3 white justify-center hover-white hover-green pointer no-underline">Restful API</a>
            </li>

            <li>
              <a href='https://www.npmjs.com/package/bcrypt-nodejs' target='_blank' className="f3 white justify-center hover-white hover-green pointer no-underline">Bcrypt-nodejs</a>
            </li>

            <li>
              <a href='https://www.npmjs.com/package/pg' target='_blank' className="f3 white justify-center hover-white hover-green pointer no-underline">PostgreSQL</a>
            </li>

            <li>
              <a href='https://knexjs.org/' target='_blank' className="f3 white justify-center hover-white hover-green pointer no-underline">Knex</a>
            </li>

            <li>
              <a href='https://www.postman.com/' target='_blank' className="f3 white justify-center hover-white hover-green pointer no-underline">Postman</a>
            </li>

          </ul>
          <button className='mt1 mb1 pt2 pb2 pr3 pl3'>
            <a href='https://github.com/DevonGifford/FaceDetectionApp-BackEnd' target='_blank' className='no-underline'>
              <FaGithub /> Repo
            </a>
          </button>
        </div>

      </div>

    </div>
  )
}

export default AboutProject
