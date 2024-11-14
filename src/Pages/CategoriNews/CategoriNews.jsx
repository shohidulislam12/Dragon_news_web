import { CgLaptop } from "react-icons/cg";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const CategoriNews = () => {
const {data:news}=useLoaderData()

    return (
        <div >
             <h2 className="font-semibold">Dragon News Home</h2>
            <p className="text-gray-300">{news.length}News Found in these catagotis </p>

           <div className="overflow-scroll h-[400px] ">
           {
     news.map((newssin,ind)=><NewsCard   key={ind} newssin={newssin}></NewsCard>)
            }
           </div>
            {
                !news.length&&<h2 className="text-2xl text-red-600 my-10">no news found in these catagoti </h2>
            }
        </div>
    );
};

export default CategoriNews;