import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";
import Footer from "../Shared/Footer/Footer";



const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <br />
            <Outlet></Outlet>
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Main;