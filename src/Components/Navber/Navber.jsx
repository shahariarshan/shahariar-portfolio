
import logo from '../../assets/_Blue___Black_Simple_Company_Logo-removebg-preview.png'
import { Link } from 'react-router-dom';
import { AiFillContacts } from "react-icons/ai";

const Navbar = () => {
    const navLinks =
        < >
            {<li><Link className='navItem  ' >Home</Link></li>}
            {<li><Link to='/projects'>Projects</Link></li>}
            {<li><Link className='navItem'>About</Link></li>}
            {<li><Link className='navItem'>Contacts</Link></li>}


        </>
    return (
       
        <div className=" navbar h-20 fixed z-10  bg-black bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 text-black text-center rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img  src={logo} alt="logo" className='w-[130px] h-[130px]' />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <button  className='ml-36'>   
                   <AiFillContacts className='mr-3 text-lg'></AiFillContacts><span >Contact Me</span>
                </button> 
            </div>
    );
};

export default Navbar;