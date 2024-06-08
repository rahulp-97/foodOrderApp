import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    const [showItems, setShowItems] = useState(false);
    
    const handleClick = () => {
        setShowItems(!showItems);
    }
  return (
    <div>
        <div className="w-6/12 my-3 p-2 mx-auto bg-gray-200 shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
                <span>🔽</span>
            </div>
            {showItems && <ItemList items={data?.itemCards}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory;