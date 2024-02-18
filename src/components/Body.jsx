import RestaurantCard from "./RestaurantCard";
import {restaurants} from "./constant.js";

const Body = () => {
    return (
        <div className="flex flex-wrap">
            {
                restaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} />
                })
            }
        </div>
    )
}

export default Body;