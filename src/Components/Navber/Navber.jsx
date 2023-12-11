
import './navber.css'
import logo from '../../assets/_Blue___Black_Simple_Company_Logo-removebg-preview.png'
import contact from '../../assets/Untitled design.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <img src={logo} alt="logo" className='logo' />


                <div className='desktopMenu'>
                    <Link className='navItem'>Home</Link>
                    <Link className='navItem'>Projects</Link>
                    <Link className='navItem'>About me</Link>
                    <Link className='navItem'>Contact</Link>
                </div>
                <div>
                    <button className='desktopMenuBtn'>
                        <img className='contactLogo mr-2' src={contact} alt="" />
                        Contact Me
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;