import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="w-1/2 mx-auto card shadow-sm card-body">
            <h2 className="text-2xl font-semibold text-left">Login your account</h2>
             <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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