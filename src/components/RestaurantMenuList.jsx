import { CLOUDINARY_URL } from "./constant";

const RestaurantMenuList = ({item}) => {
    return (
        <div className="flex flex-col space-x-36 md:flex-row border-b border-gray-400 py-4">
            <div className="mt-4 md:mt-0 md:ml-6">
                <h2 className="text-lg text-white font-bold">{item?.card?.info?.name}</h2>
                {console.log(item?.card?.info)}
                <p className="mt-2 text-white">Product Description</p>
                <div className="mt-4 flex items-center">
                    <span className="mr-2 text-white">Quantity:</span>
                    <div className="flex items-center">
                        <button className="bg-gray-200 rounded-l-lg px-2 py-1" disabled>-</button>
                        <span className="mx-2 text-gray-600">1</span>
                        <button className="bg-gray-200 rounded-r-lg px-2 py-1" disabled>+</button>
                    </div>
                    <span className="ml-auto font-bold">$20.00</span>
                </div>
            </div>
            <div className="flex-shrink-0">
                <img src={CLOUDINARY_URL + item?.card?.info?.imageId} alt="Product image" className="w-56 h-30 object-cover" />
            </div>
        </div>
    );
}

export default RestaurantMenuList;
