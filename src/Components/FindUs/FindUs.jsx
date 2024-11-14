import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";
const FindUs = () => {
    return (
        <div className="border px-8">
             <h2 className="font-semibold mb-3">Find Us On</h2>
           <div className="my-2  flex flex-col  space-y-2">
                <button className="btn "> <FaFacebook className="text-blue-700" /> Facebook</button>
                <button className="btn"><FaTwitter className="text-blue-700"/>Twitter</button>
                <button className="btn"> <FaInstagram className="text-red-500" /> Instragram</button>
               </div>
        </div>
    );
};

export default FindUs;