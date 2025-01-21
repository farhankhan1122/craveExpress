import { useEffect, useState } from "react";

const useBody = () => {
  const [restaurantsListData, setRestaurantsListData] = useState([]);
  // const [filteredRestaurants, setFilteredReastauants] = useState([]);

  // IMPORTANT
  // just add chrome cors extension into your browser to work this api
  // api call
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8317525&lng=80.9225668&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json, "jsonss");
    setRestaurantsListData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(restaurantsListData,"restaurantsListData");
    
};

return restaurantsListData;
};

export default useBody;
