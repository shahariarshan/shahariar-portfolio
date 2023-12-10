
import './intro.css'
import introImg from '../../assets/1-removebg-preview.png'
import { Link } from 'react-router-dom';
const Intro = () => {
    return (
       <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span>Shahariar <br />Junior Frontend Developer</span></span>
        <p>I am a fresher frontend developer</p>
        <Link><button className='btn'>Hire Me</button></Link>
        </div>
        <div>
            <img className='bg' src={introImg} alt="" />
        </div>
       </section>
    );
};

export default Intro;