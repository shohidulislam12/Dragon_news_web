import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLigin = () => {
    return (
        <div className="border">
               <h2 className="font-semibold mb-3">Login With</h2>
               <div className="my-2 space-y-2">
                <button className="btn"> <FaGoogle className="text-green-500" /> Login With Google</button>
                <button className="btn"><FaGithub  />  Login With GitHub</button>
               </div>
        </div>
    );
};

export default SocialLigin;