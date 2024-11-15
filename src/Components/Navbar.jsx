import { Link, NavLink } from "react-router-dom";
import usericon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const {name,user,logOut,setUSer}=useContext(AuthContext)
  const handleLogout=()=>{
    logOut()
    setUSer(null)
  }


    return (
        <div className=" flex justify-between">
           <div>
  {
    user&&  <p>{user?.email}</p>
  } 
           </div>
           <div className="flex gap-5">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About </NavLink>
                    <NavLink to="career">Career</NavLink>
                    <NavLink to="dev">DevInf</NavLink>
           </div>
           <div className="flex gap-2">
         {
          user&&user.email?<div>
            <img className="w-10 rounded-full" src={user.photoURL} alt="" />
            <p className="text-sm">{user?.displayName}</p>
          </div> :  <div>
          <img src={usericon} alt="" />
          </div>
         }
           {
               user? <button onClick={handleLogout} className="bg-black rounded-sm px-4 text-white p-2 ">Log Out</button> : <Link to='/auth/login' className="bg-black rounded-sm px-4 text-white p-2 ">Login</Link>
           }
           
           </div>
        </div>
    );
};

export default Navbar;