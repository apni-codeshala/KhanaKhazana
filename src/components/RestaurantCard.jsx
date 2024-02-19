import Cuisines from "./Cuisines.jsx";
import RatingStar from "./RatingStar.jsx";
import { CLOUDINARY_URL } from "./constant.js";

const RestaurantCard = ({ ...restaurant }) => {

    let cuisines = [];
    for(let i=0; i<2; i++){
        cuisines.push(restaurant.cuisines[i]);
    }

    return (
        <section className="h-5/6 w-80 shadow-xl rounded-t-md rounded bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer" style={{backgroundColor: '#d6cece'}}>
            <img className="h-56 w-80 rounded-md" src={CLOUDINARY_URL + restaurant.cloudinaryImageId} alt="image" />
            <div className="space-x-1 flex justify-center mt-2">
                <RatingStar rating={restaurant.avgRating} />
            </div>
            <h1 className="text-3xl my-5 w-30 h-20">{restaurant.name}</h1>
            <h2 className="font-semibold mb-2">{restaurant.costForTwo + " - " + restaurant.sla.deliveryTime + " MIN"}</h2>
            <div className="px-6 pb-2 h-30">
                {
                    cuisines.map((cuisine, index) => {
                        return <Cuisines cuisine={cuisine} />
                    })
                }
            </div>
        </section>   
    )
}

export default RestaurantCard;