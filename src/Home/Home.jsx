import About from "../About/About";
import Intro from "../Components/Intro/Intro";
import Links from "../Components/Links/Links";
import Skill from "../Components/MySkill/Skill";
import Navbar from "../Components/Navber/Navber";



const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Intro></Intro>
            <Skill></Skill>
            <About></About>
            <Links></Links>
           
        </div>
    );
};

export default Home;