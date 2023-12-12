
import { Link } from 'react-scroll';
import logo from '../../assets/_Blue___Black_Simple_Company_Logo-removebg-preview.png'

import { AiFillContacts } from "react-icons/ai";


const Navbar = () => {
    const navLinks =
        // < >
        //     {<li><Link >Home</Link></li>}
        //     {<li><Link to='/projects'>Projects</Link></li>}
        //     {<li><Link >About</Link></li>}
        //     {<li><Link >Contacts</Link></li>}
        //     {<li><Link >Contacts</Link></li>}
        // </>
        [
            {
                id:1,
                link:'Home'
            },
            {
                id:2,
                link:'Projects'
            },
            {
                id:3,
                link:'about'
            },
            {
                id:4,
                link:'education'
            },
            {
                id:5,
                link:'skill'
            }
        ]
    return (
       
        <div className=" navbar h-20 fixed z-10  bg-black bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 text-black text-center rounded-box w-52">
                            {navLinks.map(({id,link})=>(
                                <li key={id} className='cursor-point capitalize font-semibold text-gray-400 hover:text-cyan-300'><Link to={link} smooth duration={500}>{link}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <img name='Home' src={logo} alt="logo" className='w-[130px] h-[130px]' />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLinks.map(({id,link})=>(
                                <li key={id} className='cursor-point capitalize font-semibold text-gray-400 hover:text-cyan-300'><Link  to={link} smooth duration={500}>{link}</Link></li>
                            ))}
                    </ul>
                </div>
                <button  className='lg:ml-36'>   
                   <AiFillContacts className='mr-3 text-lg'></AiFillContacts><span >Contact Me</span>
                </button> 
            </div>
    );
};

export default Navbar;