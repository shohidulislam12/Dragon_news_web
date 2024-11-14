import { FaUser, FaRegCommentDots, FaShareAlt, FaEye } from "react-icons/fa"
const NewsCard = ({newssin}) => {
    const {title,author, details,total_view,image_url,thumbnail_url,rating}=newssin
    return (
        <div className="card  bg-base-100 shadow-lg rounded-lg ">
            <div className="p-4  flex items-center gap-2">
               <img className="w-14 h-14 rounded-xl" src={author.img} alt="" />
                <div>
                    <p className="text-sm font-semibold">{author.name}</p>
                    <p className="text-xs text-gray-500">{author.published_date}</p>
                </div>
                <div className="ml-auto flex gap-2 text-gray-500">
                    <FaRegCommentDots />
                    <FaShareAlt />
                </div>
            </div>
            <div>
            <h2 className="card-title text-lg font-bold">
                    {title}
                </h2>
            </div>
            <figure>
                <img 
                    src={thumbnail_url}
                    alt="News Image" 
                    className="w-full h-40 object-cover"
                />
            </figure>

            <div className="card-body p-4">
            
                
                <p className="text-sm text-gray-500 mt-2">
                   {
                details}
                </p>
                
                <p className="text-sm text-red-500 mt-2 cursor-pointer">
                    Read More
                </p>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-yellow-500">
                     <span>
                           {[...Array(5)].map((_, index) => (
                            <span key={index} className="text-lg">★</span>
                        ))}
                     </span>
                     <span>{rating.number}</span>

                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default NewsCard;