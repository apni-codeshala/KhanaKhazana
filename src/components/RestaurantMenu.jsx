import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    
    const params = useParams();
    const {id} = params;

    const [restaurant, setRestaurant] = useState(null);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + id)
        const json = await data.json();
        console.log(json);
    }

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    return (
        <h1>Restaurant Info</h1>
    )
}

export default RestaurantMenu;