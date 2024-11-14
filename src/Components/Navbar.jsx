import { NavLink } from "react-router-dom";
import user from "../assets/user.png"
const Navbar = () => {
    return (
        <div className=" flex justify-between">
           <div>
    
           </div>
           <div className="flex gap-5">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="about">About </NavLink>
                    <NavLink to="career">Career</NavLink>
           </div>
           <div className="flex gap-2">
           <div>
           <img src={user} alt="" />
           </div>
             <button className="bg-black rounded-sm px-4 text-white p-2 ">Login</button>
           </div>
        </div>
    );
};

export default Navbar;