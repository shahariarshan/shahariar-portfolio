import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navber/Navber";
import Footer from "../Components/footer/Footer";
const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;