import { useState, useEffect } from "react";
import { SEARCH_RESTAURANT } from "../components/constant.js";

const useRestaurant = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    async function getRestaurnats() {
        try {
            const data = await fetch(SEARCH_RESTAURANT)
            const json = await data.json();
            // Optional chaining
            setAllRestaurants(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants);
            setFilteredRestaurants(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants);
        } catch (error) {
            console.log('Error in fetching the restaurants :', error);
        }
    }

    useEffect(() => {
        // API call
        getRestaurnats();
    }, []);

    return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
}

export default useRestaurant;