import { Link, NavLink } from "react-router-dom";
import user from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const {name}=useContext(AuthContext)
    return (
        <div className=" flex justify-between">
           <div>
  {
    name&&  <p>{name}</p>
  }
           </div>
           <div className="flex gap-5">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About </NavLink>
                    <NavLink to="career">Career</NavLink>
           </div>
           <div className="flex gap-2">
           <div>
           <img src={user} alt="" />
           </div>
             <Link to='/auth/login' className="bg-black rounded-sm px-4 text-white p-2 ">Login</Link>
           </div>
        </div>
    );
};

export default Navbar;