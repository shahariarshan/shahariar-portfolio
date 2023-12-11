
import './intro.css'
import introImg from '../../assets/1-removebg-preview.png'
import hireMe from '../../assets/Untitled_design-removebg-preview.png'
import { Link } from 'react-router-dom';
const Intro = () => {
    return (
       <section id='intro' className='flex'>
        
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Shahariar  </span><br />
            Frontend Developer</span>
        <p className='introDes'>I am a fresher frontend developer and increasing more knowledge about it.</p>
        <Link><button className='btn'><img  src={hireMe} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
        </div>
        <div>
           <img  src={introImg} alt="Profile" className='bg'/>
           </div>
          
       </section>
    );
};

export default Intro;