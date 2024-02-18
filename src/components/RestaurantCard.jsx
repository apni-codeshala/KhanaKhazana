import RatingStar from "./RatingStar.jsx";
import { CLOUDINARY_URL, restaurants } from "./constant.js";

const RestaurantCard = ({ ...restaurant }) => {
    console.log(restaurant);

    return (
        // <div className="card">
        //     <img src={CLOUDINARY_URL + restaurant.cloudinaryImageId}/>
        //     <h2>{restaurant.name}</h2>
        //     <h3>{restaurant.cuisines.join(", ")}</h3>
        //     <h4>{restaurant.sla.deliveryTime + " MIN"}</h4>
        // </div>


        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={restaurant.id}>
            <a href="#">
                <img className="p-8 rounded-t-lg" src={CLOUDINARY_URL + restaurant.cloudinaryImageId} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{restaurant.name}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <RatingStar rating={restaurant.avgRating} />
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{restaurant.avgRating}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{restaurant.sla.deliveryTime + " MIN"}</span>
                </div>
            </div>
        </div>


    )
}

export default RestaurantCard;