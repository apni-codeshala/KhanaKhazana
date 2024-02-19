import Cuisines from "./Cuisines.jsx";
import RatingStar from "./RatingStar.jsx";
import { CLOUDINARY_URL } from "./constant.js";

const RestaurantCard = ({ ...restaurant }) => {

    let cuisines = [];
    for(let i=0; i<2; i++){
        cuisines.push(restaurant.cuisines[i]);
    }

    return (
        <section className="h-5/6 w-80 rounded-t-md rounded bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer" style={{backgroundColor: '#d6cece'}}>
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

        // <div class="rounded overflow-hidden shadow-lg flex flex-col">
        //     <a href="#"></a>
        //     <div class="relative"><a href="#">
        //         <img className="w-full object-cover w-50 h-50"
        //             src={CLOUDINARY_URL + restaurant.cloudinaryImageId}
        //             alt="Sunset in the mountains" />
        //         <div
        //             className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
        //         </div>
        //     </a>
        //     </div>
        //     <div className="px-6 py-4 mb-auto" style={{ backgroundColor: "#fff" }}>
        //         <a href="#"
        //             className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{restaurant.name}</a>
        //         <p className="text-gray-500 text-sm">
        //             {restaurant.costForTwo + " - " + restaurant.sla.deliveryTime + " MIN"}
        //         </p>
        //         <div className="pt-4 pb-2 flex flex-wrap">
        //             {
        //                 restaurant.cuisines.map((cuisine) => {
        //                     return <Cuisines cuisine={cuisine} />
        //                 })
        //             }
        //         </div>
        //     </div>
        //     <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        //         <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
        //             <RatingStar rating={restaurant.avgRating} />
        //         </span>

        //         <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
        //             <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        //                     d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
        //                 </path>
        //             </svg>
        //             <span className="ml-1">39 Comments</span>
        //         </span>
        //     </div>
        // </div>

    )
}

export default RestaurantCard;