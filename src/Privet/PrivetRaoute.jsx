import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRaoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    console.log("user from PrivetRaoute",user)
    const location=useLocation()
    console.log(location)
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
              return children;
    }

 if(!user) { return <Navigate state={location} to={'/auth/login'}></Navigate>}
};

export default PrivetRaoute;