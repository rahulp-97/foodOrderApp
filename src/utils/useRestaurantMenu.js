import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resDetail, setResDetail] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const { data } = await response.json();
    // console.log(data);
    // console.log('menu', data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    setResDetail(data);
  };
  return resDetail;
};

export default useRestaurantMenu;