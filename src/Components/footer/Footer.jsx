import { IoLogoLinkedin } from 'react-icons/io5';
import logo from '../../assets/_Blue___Black_Simple_Company_Logo-removebg-preview.png'
import { FaInstagram } from 'react-icons/fa6';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaFacebook } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        
        <footer className="footer items-center  p-4 bg-neutral text-neutral-content">
            <ScrollToTop smooth  style={{ marginTop: "150vh" }} />
            <aside className="items-center grid-flow-col">
                <img src={logo} alt="logo" className='w-[130px] h-[100px]' />
                <p>Copyright © 2023 - All right reserved</p>
            </aside>
            <nav>

            </nav>
            <nav>

                <a className="link link-hover" name='about'>About Me</a>
                <a className="link link-hover">Contact</a>

            </nav>
            <nav className="grid-flow-col gap-2 md:place-self-center md:justify-self-end">
                
               
                <div className='flex'>
        <IoLogoLinkedin className='text-2xl mr-3'></IoLogoLinkedin> <a className='mr-2' href="https://www.linkedin.com/in/shahariarmohammad/"></a>
        </div>
        <div className='flex'>
        <FaInstagram className='text-2xl mr-3'></FaInstagram> <a className='mr-2' href="https://www.instagram.com/shahariar__69/?igshid=MzMyNGUyNmU2YQ%3D%3D"></a>
        </div>
        <div className='flex'>
        <MdOutlineAlternateEmail className='text-2xl mr-3'></MdOutlineAlternateEmail> <a className='mr-2' href="mailto:shahariarmohammadhassan@gmail.com"></a>
        </div>
        <div className='flex'>
        <FaFacebook className='text-2xl mr-3'></FaFacebook> <a className='mr-2' href="https://www.facebook.com/profile.php?id=100072478020631"></a>
        </div>
            </nav>
        </footer>
    );
};

export default Footer;