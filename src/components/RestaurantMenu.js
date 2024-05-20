import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import { restaurantImageUrl } from "../utils/constants.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const navigate = useNavigate();
  const { resId } = useParams();

  const resDetail = useRestaurantMenu(resId);
  if (resDetail === null){
    return <Shimmer />
  }
  // console.log("data", resDetail);
  // console.log("restaurant", resDetail?.cards[2]?.card?.card?.info);
  const {areaName, availability, avgRating, city, name, cuisines, costForTwoMessage, cloudinaryImageId, totalRatingsString } = resDetail?.cards[2]?.card?.card?.info;
  const menuItems = resDetail?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
  // console.log('menu', menuItems);
  // console.log(resDetail?.cards[2]?.card?.card?.info);
  return(
    <div className="restaurant-menu">
      <div className="go-back" >
        <button onClick={()=>navigate(-1)}>Go back</button>
      </div>
      <div className="menu-header">
        <div>
        <h1>{name}</h1>
        <h3>{avgRating}⭐</h3>
        <span>{totalRatingsString}</span>
        <h4>availability: <span className={availability?.opened ? 'opened' : 'closed'}>{availability.opened ? 'Open' : 'closed'}</span></h4>
        <p>{areaName}, {city}</p>
        </div>
        <img className="menu-image" src={`${restaurantImageUrl}/${cloudinaryImageId}`} />
      </div>
      <p>Cuisines: {cuisines.join(", ")} - {costForTwoMessage}</p>
      <h1>Menu</h1>
      <table className="table">
        <thead>
        <tr>
          <th>item</th>
          <th>price</th>
        </tr>
        </thead>
        <tbody>
        {menuItems?.map(item => {
          const {defaultPrice, finalPrice, id, name, price} = item.card.info;
          // console.log('default',defaultPrice);
        return <tr key={id}>
            <th>{name}</th>
            <th><span>Rs. {price ? (finalPrice/100 || price/100) : defaultPrice/100}</span></th>
          </tr>
         })}
         </tbody>
      </table>
    </div>
  );
};

export default RestaurantMenu;
