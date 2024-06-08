import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import RestaurantCard, { WithRatingLabel } from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filteredResData, setFilteredResData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [hasResData, setHasResData] = useState(true);

  const RestaurantCardWithLabel = WithRatingLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const { data } = await response.json();
    setResData(
      data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResData(
      data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  const handleSearchInput = (e) => {
    e.stopPropagation();
    setSearchInput(e.target.value);
  };
  const handleSearchClick = (e) => {
    e.stopPropagation();
    const searchVal = searchInput.toLowerCase();
    if (searchVal.trim().length > 0) {
      const searchedRestaurants = resData.filter((item) =>
        item.info.name.toLowerCase().includes(searchVal)
      );
      setFilteredResData(searchedRestaurants);
      searchedRestaurants.length == 0
        ? setHasResData(false)
        : setHasResData(true);
    } else if (searchVal.trim().length === 0) {
      setHasResData(true);
      setFilteredResData(resData);
    }
  };
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) {
    return <h1>Looks like you are offline!! Please check your internet connection.</h1>
  }
  return (
    <div>
      <div className="m-4 p-4">
        <input
          type="text"
          className="border border-solid border-black"
          value={searchInput}
          onChange={handleSearchInput}
        />
        <button onClick={handleSearchClick} className="mx-2 bg-black hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
          Search
        </button>
      </div>
      <div className="">
        {filteredResData.length !== 0 && hasResData ? (
          <ul className="flex flex-wrap lg:mx-5">
            {filteredResData?.map((restaurant) => {
              const {id, avgRating} = restaurant.info;
              return (
                <li key={id} className="m-3">
                  <Link className="card-link" to={`/restaurants/${id}`}>
                    {(avgRating > 4.3) ? <RestaurantCardWithLabel restaurantDetail={restaurant?.info} /> : <RestaurantCard restaurantDetail={restaurant?.info} />}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : !hasResData ? (
          <h1>No results found</h1>
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;