import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navber/Navber";
import Footer from "../Components/footer/Footer";
const Main = () => {
    return (
        <div className="pl-5 pr-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;