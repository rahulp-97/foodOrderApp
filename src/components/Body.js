import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filteredResData, setFilteredResData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [hasResData, setHasResData] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const { data } = await response.json();
    setResData(data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResData(data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  const handleSearchInput = (e) => {
    e.stopPropagation();
    setSearchInput(e.target.value);
  }
  const handleSearchClick = (e) => {
    e.stopPropagation();
    const searchVal = searchInput.toLowerCase();
    if(searchVal.trim().length > 0){
      const searchedRestaurants = resData.filter(item => item.info.name.toLowerCase().includes(searchVal));
      setFilteredResData(searchedRestaurants);
      searchedRestaurants.length == 0 ? setHasResData(false) : setHasResData(true);
    }
    else if(searchVal.trim().length === 0) {
      setHasResData(true);
      setFilteredResData(resData);
    }
}
  return (
    <div className="body">
      <div className="search">
        <input type="text" className="search-box" value={searchInput} onChange={handleSearchInput} />
        <button onClick={handleSearchClick}>search</button>
        <div className="filters">
            <button>filter</button>
            <button>all</button>
        </div>
      </div>
      <div className="res-container">
        {(filteredResData.length !== 0 && hasResData) ? (
          <ul className="res-cards-list">
            {filteredResData?.map((restaurant) => (
              <li key={restaurant.info.id}>
                <RestaurantCard restaurantDetail={restaurant.info} />
              </li>
            ))}
          </ul>
        ) : !hasResData ? (
          <h1>No results found</h1>
        ) : (
          <Shimmer />
        ) }
      </div>
    </div>
  );
};

export default Body;