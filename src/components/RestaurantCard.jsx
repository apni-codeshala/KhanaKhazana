import Cuisines from "./Cuisines.jsx";
import RatingStar from "./RatingStar.jsx";
import { CLOUDINARY_URL } from "./constant.js";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = ({...restaurant }) => {
 
    const {user} = useContext(UserContext);

    let cuisines = [];
    for(let i=0; i<2; i++){
        cuisines.push(restaurant?.cuisines[i]);
    }

    return (
        <section className="w-80 shadow-xl rounded-t-md rounded bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer" style={{backgroundColor: '#d6cece'}}>
            <img className="h-56 w-80 rounded-md" src={CLOUDINARY_URL + restaurant.cloudinaryImageId} alt="image" />
            <div className="space-x-1 flex justify-center mt-2">
                <RatingStar rating={restaurant.avgRating} />
            </div>
            <h1 className="text-3xl my-5 w-30 h-20">{restaurant.name}</h1>
            <h2 className="font-semibold mb-2">{restaurant.costForTwo + " - " + restaurant.sla.deliveryTime + " MIN"}</h2>
            <div className="px-6 pb-2 h-30">
                {
                    cuisines.map((cuisine, index) => {
                        return <Cuisines cuisine={cuisine} key={index}/>
                    })
                }
                <button type="button"  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-1xl font-bold px-5 py-0.5 text-center me-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</button>
            </div>
            {user.name}
        </section>   
    )
}

export default RestaurantCard;