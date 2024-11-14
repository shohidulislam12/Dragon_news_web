import Header from "../Components/Header";
import LetestNews from "../Components/LetestNews";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
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
           <aside className="left col-span-3">left</aside>
           <section className="main col-span-6 ">main content</section>
           <aside className="right col-span-3"> right</aside>

            </main>
           
        </div>
    );
};

export default HomeLayout;