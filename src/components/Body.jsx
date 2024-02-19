import RestaurantCard from "./RestaurantCard";
import { restaurants } from "./constant.js";

const Body = () => {
    return (
        // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="flex flex-wrap justify-center gap-10 p-10" style={{backgroundColor: '#3d3d3d'}}>
            {
                restaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} />
                })
            }
        </div>
    )
}

export default Body;