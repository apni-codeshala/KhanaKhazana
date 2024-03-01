import RestaurantMenuList from "./RestaurantMenuList";

const RestaurantMenuCard = ({ menu }) => {
    if (menu?.card?.card?.itemCards) {
        return (
            <div className="container mx-28 pb-20">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h1 className="text-3xl font-bold my-4 text-white">{menu?.card?.card?.title}</h1>
                </div>
                <div className="mt-8">
                    {
                        menu?.card?.card?.itemCards?.map((item) => {
                            return <RestaurantMenuList item={item} key={item?.card?.info?.id}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default RestaurantMenuCard;