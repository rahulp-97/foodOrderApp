import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const [isexpanded, setIsExpanded] = useState(false);
    const handleClick = () => {
        setShowIndex();
        setIsExpanded(!isexpanded);
    };
  return (
    <div>
        <div className="w-6/12 my-3 p-2 mx-auto bg-gray-200 shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
                <span>🔽</span>
            </div>
            {showItems && isexpanded && <ItemList items={data?.itemCards}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory;