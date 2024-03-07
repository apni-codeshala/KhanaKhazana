export function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) => {
        return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return filteredData;
}