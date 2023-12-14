/* eslint-disable react/no-unescaped-entities */

import './intro.css'
import { useEffect } from 'react';

// import introImg from '../../assets/1-removebg-preview.png'
import introImg from '../../assets/8c660e10-c110-43bb-a350-df50800fb45c.jfif'
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

                <div className='w-[50%] space-y-3 mt-[50vh] mx-auto '>
                    <span className=' text-xl'>Hello,</span><br />
                    <span className='text-3xl'>I'm <span className='text-yellow-300'>Shahariar Mohammad Hassan </span>  
                       </span><br />
                       <span className='text-2xl'> Junior Frontend Developer</span>

                    <p className='introDes'>I am a fresher frontend developer and increasing more knowledge about it.</p>

                    <a className='btn motion-safe:hover:-translate-x-0.5 hover:bg-sky-700 motion-safe:transition focus:border-blue-400' target="blank" href='/Resume_11_12_2023_05_59_50_PM.pdf' download={true}><FaDownload></FaDownload>Download CV</a>
                </div>

                <img src={introImg} alt="" className=' blob' />


            </div>



        </section>
    );
};

export default Intro;

