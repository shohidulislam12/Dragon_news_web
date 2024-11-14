import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftLayout = () => {
    const [catagoris,setCatagori]=useState()
    useEffect(()=>{
fetch('https://openapi.programming-hero.com/api/news/categories')
.then((res)=>res.json())
.then((data)=>setCatagori(data.data.news_category))
    },[])
    return (
        <div>
            <h2 className="font-semibold">All Caterogy {catagoris?.length}</h2>
            <div className="flex flex-col my-4   gap-2">
                {
                    catagoris?.map((catagori)=>
                    <NavLink to={`/catagori/${catagori.category_id}`} className="btn" key={catagori.category_id}>{catagori.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftLayout;