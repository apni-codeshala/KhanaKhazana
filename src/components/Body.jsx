import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import BodyShimmer from "./BodyShimmer.jsx";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useRestaurant from "../utils/useRestaurant.js";
import useOnline from "../utils/useOnline.js";

const Body = () => {

    const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurant();
    const online = useOnline();

    const [searchText, setSearchText] = useState('');

    if (!online) {
        return <h1 className="p-10 mt-20">Offline, please check your intenet connection!</h1>
    }
    if (!allRestaurants) {
        return null;
    }
    return allRestaurants.length == 0 ?
        (<BodyShimmer />) : filteredRestaurants?.length != 0 ? (
            <div style={{ backgroundColor: '#3d3d3d' }}>
                <form 
                    className="max-w-md mx-auto pt-20"
                    onSubmit={(e) => {
                        e.preventDefault();
                        // Need to filter the data
                        const data = filterData(searchText, allRestaurants);
                        // Update the state - resturants
                        setFilteredRestaurants(data);
                    }}
                >
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Reastaurants...."
                            required
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >Search</button>
                    </div>
                </form>
                <div className="flex flex-wrap justify-center gap-10 p-10">
                    {
                        filteredRestaurants.map((restaurant) => {
                            return (
                                <Link 
                                    to = {"/restaurant/" + restaurant.info.id}
                                    key={restaurant.info.id}
                                >
                                    <RestaurantCard {...restaurant?.info} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        ) : (
            <div style={{ backgroundColor: '#3d3d3d' }}>
                <form className="max-w-md mx-auto pt-20">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Reastaurants...."
                            required
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={(e) => {
                                // Need to filter the data
                                const data = filterData(searchText, allRestaurants);
                                // Update the state - restaurants
                                setFilteredRestaurants(data);
                                e.preventDefault();
                            }}
                        >Search</button>
                    </div>
                </form>
                <div className="flex flex-wrap justify-center gap-10 p-10">
                    No restaurant match ypur filter!!!
                </div>
            </div>
        )
}

export default Body;