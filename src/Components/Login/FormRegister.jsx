import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const FormRegister = () => {
    const {creatnewUser,user,setUSer}=useContext(AuthContext)
    const handleRegistration=(e)=>{
e.preventDefault()
const name=e.target.name.value
const photo=e.target.photo.value
const email=e.target.email.value
const password=e.target.password.value
console.log(name,email,photo,password)
creatnewUser(email, password)
.then((result)=>{
    console.log(result)
    setUSer(result)
})
.catch((error)=>{
    console.log(error.message)
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