import moment from "moment";
import logo from "../assets/logo.png"
const Header = () => {

    return (
        <div className="flex flex-col mx-auto py-2 items-center text-center">
            <div className="my-3">
                <img className="w-[400px]" src={logo} alt="" />
            </div>
            <p className="text-gray-500">Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY ")}</p>
        </div>
    );
};

export default Header;