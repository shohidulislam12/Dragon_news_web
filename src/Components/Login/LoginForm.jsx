import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const LoginForm = () => {
const {signin,setUSer,user}=useContext(AuthContext)
const [error,setError]=useState({})
const navigate=useNavigate()
const location=useLocation()


  const handleLogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value

    signin(email, password)
    .then((result)=>{

        setUSer(result)
        navigate(location?.state?location.state:'/')
    })
    .catch((err)=>{
       setError({...error,login:err.code})
    })
        }
    return (
        <div className="w-1/2 mx-auto card shadow-sm card-body">
            <h2 className="text-2xl font-semibold text-left">Login your account</h2>
             <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          {
            error.login&& <label className="label">
           {error.login}
          </label>
          }
          <label className="label">
            <a href="#" className="label-text-alt text-red-500 link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white rounded-none">Login</button>
        </div>
      </form>
      <p>Dont have an Account? <Link to="/auth/register" className="text-red-500">Register</Link></p>
        </div>
    );
};

export default LoginForm;