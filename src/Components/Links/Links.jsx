import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
const Links = () => {
    const AllLinks=[
        {
            id:1,
            child: (
                
                <>
                LinkedIn <IoLogoLinkedin  size={30}></IoLogoLinkedin> 
                </> 
            ),
            href:'https://www.linkedin.com/in/shahariarmohammad/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child: (
                
                <>
                Github <FaGithub  size={30}></FaGithub> 
                </> 
            ),
            href:'https://github.com/shahariarshan',
           
            
        },
        {
            id:3,
            child: (
                
                <>
              Instagram  <FaInstagram  size={30}></FaInstagram>  
                </> 
            ),
            href:'https://www.instagram.com/shahariar__69/?igshid=MzMyNGUyNmU2YQ%3D%3D',
           
            
        },
        {
            id:4,
            child: (
                
                <>
                 Mail <MdOutlineAlternateEmail  size={30}></MdOutlineAlternateEmail>
                </> 
            ),
            href:'mailto:shahariarmohammadhassan@gmail.com',
            style:'rounded-br-md'
           
            
        },
        
       
    ]
    return (
        <div className="flex flex-col top-[35%] left-0 fixed">
            <ul>
               {
                AllLinks.map(({id,child,href,style})=>
                (
                    <li key={id} className={"flex justify-between items-center w-40 h-14  px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-cyan-400" + " "+style}>
                    <a className="flex justify-between items-center w-full text-black" href={href}
                    >
                         {child}
                    </a>
                </li>
                )
                )
               }
            </ul>
            
        </div>
    );
};

export default Links;