import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import LoginForm from "../Components/Login/LoginForm";

const AuthLayout = () => {
    return (
        <div className="w-11/12 py-5 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default AuthLayout;