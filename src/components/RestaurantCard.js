import { restaurantImageUrl } from "../utils/constants";

const RestaurantCard = (props) => {
    const {avgRating, cloudinaryImageId, costForTwo, cuisines, id, name, sla} = props.restaurantDetail;
    return (
        <div className="w-[300px] border border-solid border-gray-200 hover:bg-gray-200 rounded-lg px-2 py-2">
            <img className="rounded-lg  h-[330px]" alt="res-logo" src={`${restaurantImageUrl}/${cloudinaryImageId}`} />
                <h3 className="font-bold py-2 text-lg">{name}</h3>
                <h4 className="cuisines">{cuisines.join(', ')}</h4>
                <h4>{avgRating} ⭐</h4>
                <h4>{sla?.deliveryTime} minutes</h4>
                <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;