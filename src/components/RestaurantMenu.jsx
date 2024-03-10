import { useParams } from "react-router-dom";

import RatingStar from "./RatingStar.jsx";
import Cuisines from "./Cuisines.jsx";
import RestaurantMenuCard from "./RestaurantMenuCard.jsx";
import MenuHeaderShimmer from "./MenuHeaderShimmer.jsx";
import { CLOUDINARY_URL } from "./constant.js";
import useMenu from "../utils/useMenu.js";

const RestaurantMenu = () => {
    const params = useParams();
    const { id } = params;
    const [restaurant, menu] = useMenu(id);

    return !(restaurant?.cuisines) ? (<MenuHeaderShimmer />):(
        <div className="flex flex-col justify-center align-center" style={{ backgroundColor: '#3d3d3d' }}>

            <div className="w-full flex mt-20 py-10 px-28 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ backgroundColor: '#3d3d3d' }}>
                <a href="#">
                    <img className="p-2 h-56 w-80 rounded-md" src={CLOUDINARY_URL + restaurant.cloudinaryImageId} alt="image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-3xl w-full pt-2 font-semibold tracking-tight text-gray-900 dark:text-white">{restaurant.name}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <RatingStar rating={restaurant?.avgRating} />
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{restaurant.avgRating}</span>
                    </div>
                    <div className="pb-2 h-30">
                        {
                            restaurant?.cuisines.map((cuisine, index) => {
                                return <Cuisines cuisine={cuisine} key={index}/>
                            })
                        }
                    </div>
                    <div className="items-center justify-between">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">Delivery Time : {restaurant?.sla?.deliveryTime} MIN </span>
                        <div className="pt-2 text-gray-900 dark:text-white">Locality : {restaurant?.areaName}, {restaurant?.city}</div>
                    </div>
                </div>
            </div>
            
            {
                menu.map((menuItem, index) => {
                    return <RestaurantMenuCard menu={menuItem} key={index}/>
                })
            }

        </div>
    )
}

export default RestaurantMenu;
