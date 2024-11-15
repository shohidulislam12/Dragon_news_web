import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import LetestNews from "../Components/LetestNews";
import Navbar from "../Components/Navbar";
import RightNav from "../layout/RightNav";
import DetailsCart from "./DetailsCart";

const NewsDetails = () => {
    const datas=useLoaderData()
   
    return (
        <div>
           <header> <Header></Header></header>
           <section className="w-11/12 mx-auto ">
           <LetestNews>

            </LetestNews>
            </section>
            <section className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </section>
            <main  className="w-11/12 mx-auto grid grid-cols-12 py-5">

           <section className="main col-span-9 ">
           
            <DetailsCart datas={datas} ></DetailsCart>
           </section>
           <aside className="right col-span-3">
            <RightNav className="gap-5">

            </RightNav>
           </aside>

            </main>
           
        </div>
    );
};

export default NewsDetails;