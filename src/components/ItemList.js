const ItemList = ({items}) => {
  return (
    <div>
        {items.map(item => {
            const {id, name, price, finalPrice, defaultPrice, description, imageId, ratings} = item?.card?.info;
            const {rating, ratingCount} = ratings?.aggregatedRating;
            return (
                <div key={id} className="p-2 m-2 border-black border-b-2 text-left">
                    <div className="flex justify-between">
                        <div className="py-2 w-10/12">
                            <div>{name}</div>
                            <div>₹{price ? (finalPrice/100 || price/100) : defaultPrice/100}</div>
                            <p className="text-sm">⭐{rating} ({ratingCount})</p>
                            <p className="text-xs">{description}</p>
                        </div>
                        <div className="py-2 pl-4  flex justify-end">
                        <img 
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`} 
                        className="w-[120px] h-[120px] rounded-lg"
                        />
                        <button className="absolute bg-black text-white p-1 m-1 rounded-lg">add+</button>
                        </div>
                    </div>
            </div>
            )
        })}
    </div>
  )
}

export default ItemList;