import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const FormRegister = () => {
    const {creatnewUser,user,updateUserProfile,setUSer}=useContext(AuthContext)
    const [error,setError]=useState({})
    const navigate=useNavigate()
    const handleRegistration=(e)=>{
e.preventDefault()
const name=e.target.name.value
if(name.length<5){
  setError({...error,name:"must be more than 5 charekter long"})
}
const photo=e.target.photo.value
const email=e.target.email.value
const password=e.target.password.value

creatnewUser(email, password)
.then((result)=>{
    setUSer(result)
    updateUserProfile({displayName:name,photoURL:photo})
    .then(()=>{
         navigate('/')
    })
    .catch((error)=>{
     
    })
  
})
.catch((error)=>{

})
    }
    return (
        <div className="w-1/2 mx-auto card shadow-sm card-body">
            <h2 className="text-2xl font-semibold text-left">Register your account</h2>
             <form onSubmit={handleRegistration} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input name="name" type="text" placeholder="Your Name " className="input input-bordered" required />
        </div>
        {
            error.name&& <label className="label">
           {error.name}
          </label>
          } 
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
        </div>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white rounded-none">Register</button>
        </div>
      </form>
      <p>already have an Account? <Link to="/auth/login" className="text-green-500">Login</Link></p>
        </div>
    );
};

export default FormRegister;