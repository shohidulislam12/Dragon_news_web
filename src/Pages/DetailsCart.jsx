import { FaEye, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const DetailsCart = ({datas}) => {
const array=datas.data[0]

    return (
        <div className="card  bg-base-100 shadow-lg rounded-lg">
            {/* Header Section */}
            <div className="p-4 flex items-center gap-2">
                <FaUser className="text-blue-500" />
                <div>
                    <p className="text-sm font-semibold">{array.author.name}</p>
                    <p className="text-xs text-gray-500">{array.author.published_date}</p>
                </div>
            </div>

            {/* Image Section */}
            <figure>
                <img
                    src={array.image_url}
                    alt="News"
                    className="w-full h-40 object-cover"
                />
            </figure>

            {/* Content Section */}
            <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold">
                {array.title}
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  {array.details}
                </p>

                <div className="flex items-center justify-between mt-4">
                    <Link to={`/catagori/${array.category_id}`}  className="bg-red-500 text-white py-1 px-4 rounded-full text-sm">
                        All news in this category
                    </Link>
                    <div className="flex items-center gap-1 text-gray-500">
                        <FaEye />
                        <span>{array.total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DetailsCart;
