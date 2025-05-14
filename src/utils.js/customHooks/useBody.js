import { useEffect, useState } from "react";

const useBody = () => {
  const [restaurantsListData, setRestaurantsListData] = useState([]);
  const [error, setError] = useState(null); // Track API errors
  // const [filteredRestaurants, setFilteredReastauants] = useState([]);

  // IMPORTANT
  // just add chrome cors extension into your browser to work this api
  // api call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8317525&lng=80.9225668&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        setRestaurantsListData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      } catch (error) {
        console.error("API Error:", error);
        setError("Failed to fetch restaurant data. Please enable CORS in your browser.");
      }
    };

    fetchData();
    // fetchData();
  }, []);

  console.log(restaurantsListData,"restaurantlistdata..");

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8317525&lng=80.9225668&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     setRestaurantsListData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
// };

// return restaurantsListData;


return { restaurantsListData, error };
};

export default useBody;
