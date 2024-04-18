import { restaurantImageUrl } from "../utils/constants";

const RestaurantCard = (props) => {
    const {avgRating, cloudinaryImageId, costForTwo, cuisines, id, name, sla} = props.restaurantDetail;
    return (
        <div className="res-card">
            <img alt="res-logo" src={`${restaurantImageUrl}/${cloudinaryImageId}`} />
                <h3>{name}</h3>
                <h4 className="cuisines">{cuisines.join(', ')}</h4>
                <h4>{avgRating} ⭐</h4>
                <h4>{sla?.deliveryTime} minutes</h4>
                <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;