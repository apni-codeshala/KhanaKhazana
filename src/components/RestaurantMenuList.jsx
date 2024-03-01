import { useState } from "react";

import { CLOUDINARY_URL } from "./constant";
import veg from "../assets/veg.png";
import nonveg from "../assets/nonveg.png"

const RestaurantMenuList = ({item}) => {

    let [qunatity, setQuantity] = useState(1);

    return (
        <div className="flex flex-row-reverse space-x-10 md:flex-row border-b border-gray-400 py-4">
            <div className="flex-shrink-0">
                <img src={CLOUDINARY_URL + item?.card?.info?.imageId} alt="Product image" className="w-56 h-30 object-cover" />
            </div>
            <div className="mt-4 ">
                <h2 className="text-lg font-2xl text-white font-bold">{item?.card?.info?.name}</h2>
                <p className="mt-2 text-white">{item?.card?.info?.description}</p>
                {
                    (item?.card?.info?.isVeg) ? (
                        <img src={veg} alt="Veg" className="w-[35px]"/>
                    ) : (
                        <img src={nonveg} alt="Non Veg" className="w-[35px]"/>
                    )
                }
                <span className="ml-auto font-bold text-white">Rs. {
                    (item?.card?.info?.price) ? (item?.card?.info?.price / 100) : (item?.card?.info?.defaultPrice / 100)
                }</span>
                <div className="mt-4 flex items-center">
                    <span className="mr-2 text-white">Quantity:</span>
                    <div className="flex items-center">
                        <button 
                            className="bg-gray-200 rounded-l-lg px-2 py-1"
                            onClick={(e) => {
                                e.preventDefault();
                                let newQuantity = qunatity-1;
                                if(newQuantity > 0){
                                    setQuantity(newQuantity);
                                }
                            }}
                        >-</button>
                        <span className="mx-2 text-white">{qunatity}</span>
                        <button 
                            className="bg-gray-200 rounded-r-lg px-2 py-1"
                            onClick={(e) => {
                                e.preventDefault();
                                let newQuantity = qunatity+1;
                                setQuantity(newQuantity);
                            }}
                        >+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenuList;
