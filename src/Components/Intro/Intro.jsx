/* eslint-disable react/no-unescaped-entities */

// import './intro.css'
import { useEffect } from 'react';

import introImg from '../../assets/1-removebg-preview.png'
import { FaDownload } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Intro = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    return (
        <section  >
            <div className='flex justify-between' data-aos="zoom-in-up">

                <div className=' space-y-3 mt-[50vh] mx-auto'>
                    <span className=' text-xl'>Hello,</span><br />
                    <span className='text-3xl'>I'm <span className='text-yellow-300'>Shahariar Mohammad Hassan </span>  
                       </span><br />
                       <span className='text-2xl'> Junior Frontend Developer</span>

                    <p className='introDes'>I am a fresher frontend developer and increasing more knowledge about it.</p>

                    <a className='btn' target="blank" href='../../../public/Resume_11_12_2023_05_59_50_PM.pdf' download={true}><FaDownload></FaDownload>Download CV</a>
                </div>

                <img src={introImg} alt="" className='mt-36' />


            </div>



        </section>
    );
};

export default Intro;

