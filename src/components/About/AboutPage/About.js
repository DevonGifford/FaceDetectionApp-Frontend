import * as React from 'react';
import './About.css'
import AboutProject from '../AboutProject/AboutProject';
import AboutDeveloper from '../AboutDeveloper/AboutDeveloper';

const About = () => {
  const [openProject, setProject] = React.useState('false');
  const [openDeveloper, setDeveloper] = React.useState('false');


  const handleOpenProject = (event) => {
    setProject(!openProject);
  };

  const handleOpenDeveloper = (event) => {
    setDeveloper(!openDeveloper);
  };


  return (
    <div className='pa3 z-2 relative'>

      {/* ABOUT THIS PROJECT */}
      <div className='white pa3 f3 mh5 pb6'>

          {/* HEADING */}
          <h2 className='underline pb3'>ABOUT THIS PROJECT</h2>
          

          {/* CONDITIONAL RENDERING */}
          {openProject ? <div></div> : <AboutProject />}

          {/* DROPDOWN "BUTTON" */}
          <p onClick={handleOpenProject} className='pb2 pt2 mr7 ml7 gray pointer hover-white'>
            {openProject ? "⬇ click here to expand ⬇" : "⬆ click here to collapse ⬆"}
          </p>

      </div>


      {/* ABOUT THE DEVELOPER */}
      <div className='white pa3 f3 mh5 pb6'>

          {/* HEADING */}
          <h2 className='underline pb3'>ABOUT THE DEVELOPER</h2>
          
          {/* CONDITIONAL RENDERING */}
          {openDeveloper ? <div></div> : <AboutDeveloper />}

          {/* DROPDOWN "BUTTON" */}
          <p onClick={handleOpenDeveloper} className='pb2 pt2 mr7 ml7 gray bg-gray-80 pointer hover-white'>
            {openDeveloper ? "⬇ click here to expand ⬇" : "⬆ click here to collapse ⬆"}
          </p>


      </div>


    </div>
  );
};

export default About;