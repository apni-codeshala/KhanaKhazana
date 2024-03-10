import { useState, useEffect } from "react";
import { MENU_API } from "../components/constant";

const useMenu = (resId) => {

    const [restaurant, setRestaurant] = useState([]);
    const [menu, setMenu] = useState([])

    async function getRestaurantInfo(){
        try {
            const data = await fetch(MENU_API + resId);
            const json = await data.json();
            setRestaurant(json?.data?.cards[0]?.card?.card?.info);
            setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);    
        } catch (error) {
            console.log('Error in fetching the restaurants :', error);
        }
    }

    useEffect(() => {
        getRestaurantInfo()
    }, []);

    return [restaurant, menu];

}

export default useMenu;