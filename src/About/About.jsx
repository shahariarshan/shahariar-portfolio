/* eslint-disable react/no-unescaped-entities */

import about from '../../src/assets/3.jfif'

const About = () => {
  return (
    <div className='mt-16' name='about'>
      <h1 className='text-center mx-auto text-5xl font-serif' >About Me</h1>
      <div className="divider divider-warning"></div>
      <div className="hero w-full">
        <div className="hero-content flex-col lg:flex-row">

          <div className='lg:pl-24'>

           
            <p className="py-6 ">I'm <span className='font-bold text-xl'>Shahariar Mohammad Hassan</span>, I am Student of Computer Science. As a junior Computer Science student,I am curious to know about web development .That's why i am started to learn MERN stack Development.My aim to elaborate my skills in HTML,CSS, MongoDB, Express.js, React.js, and Node.js to contribute to impactful web projects.Now a days I am working with that i am trying to solve different kind of problems.My goal is to working with development ex i want to explore it more as i can effort.
              

              On the Other hand i am  Passionate about playing cricket and football.If i say About My Hobbies , I love to do fishing,photography,cycling,swimming etc. 


            </p>

          </div>
          <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default About;