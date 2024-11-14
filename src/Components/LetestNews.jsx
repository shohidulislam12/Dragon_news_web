import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LetestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-gray-200 p-2 rounded-sm">
            <p className="bg-[#D72050] p-2 text-xl text-left rounded-sm text-white">Latest</p>
            <Marquee pauseOnHover={true} speed={60} className="space-x-10">
 <Link to="/news">
 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus expedita soluta iusto doloribus perferendis illum dolorem ut tempora voluptatibus autem. Velit fugit, dignissimos similique deserunt voluptas non esse voluptatem quia?</Link>
 <Link to="/news">
 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus expedita soluta iusto doloribus perferendis illum dolorem ut tempora voluptatibus autem. Velit fugit, dignissimos similique deserunt voluptas non esse voluptatem quia?</Link>
 <Link to="/news">
 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus expedita soluta iusto doloribus perferendis illum dolorem ut tempora voluptatibus autem. Velit fugit, dignissimos similique deserunt voluptas non esse voluptatem quia?</Link>
</Marquee>
        </div>
    );
};

export default LetestNews;