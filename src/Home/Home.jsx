import About from "../About/About";
import Education from "../Components/Education/Education";
import Intro from "../Components/Intro/Intro";
import Links from "../Components/Links/Links";
import Skill from "../Components/MySkill/Skill";
import Navbar from "../Components/Navber/Navber";
import Projects from "../Pages/Projects";



const Home = () => {
    return (
        <div name='Home'>
            <Navbar></Navbar>
            <Intro></Intro>
            <Skill></Skill>
            <Projects></Projects>
            <Education></Education>
            <About></About>
            <Links></Links>
           
        </div>
    );
};

export default Home;