import React from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import Shimmer from "./shimmer";
import Shimmer from "./Shimmer?v=1";
import useBody from "../utils.js/customHooks/useBody";
import useOnlineStatus from "../utils.js/customHooks/useOnlineStatus";
import UserContext from "../utils.js/userContext";
import SearchBar from "./SearchBar";
import Header from "./Header";
import corsImage from "../../public/icons/cors-image.png";
import useBodyMockData from "../utils.js/mockData2";

const Body = () => {
  // local state variable - super powerful variable  scope is local
  const [listOfRestaurants, setListOfReastauants] = useState(null);
  const [filteredRestaurants, setFilteredReastauants] = useState(null);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // custom hooks
  // const {restaurantsListData, error} = useBody();
  const restaurantsListData = useBodyMockData;
  const onlineStatus = useOnlineStatus();

  console.log(restaurantsListData, "qqqq");
  

  const { loggedInUser, setUserName } = useContext(UserContext)

  useEffect(() => {
    setListOfReastauants(restaurantsListData);
    setFilteredReastauants(restaurantsListData);
  }, [restaurantsListData]);

  if (!onlineStatus)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.{" "}
      </h1>
    );

  // normal js variable
  // scope is local
  console.log(listOfRestaurants, "listOfRestaurants...");

  // if (error) {
  //   console.log(error,"error")
  //   return (
  //     <div className="error-message">
  //       <h3>⚠️ {error}</h3>
  //       <a
  //         href="https://chrome.google.com/webstore/detail/allow-cors-access-controll/lfhmikememgdcahcdlacilocejkmlioa"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         ➡️ Please Install CORS Extension
  //         <img src={corsImage} alt="cors image" />
  //       </a>
  //     </div>
  //   );
  // }

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }



  return (
    <div className="body">
      <Header activeHeader={true} />
      <SearchBar listOfRestaurants={listOfRestaurants}
        setFilteredReastauants={setFilteredReastauants} />
      <div className="filter" style={{ display: "flex" }}>



        {/* <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.rating.rating_text > 4
            );
            setListOfReastauants(filteredList);
            console.log(listOfRestaurants, "listofres");
          }}
        >
          Top Rated Restaurants
        </button> */}

        {/* <label>User Name</label> */}
        {/* <input value={loggedInUser} className="border border-black" onChange={(e) => setUserName(e.target.value)} /> */}
      </div>


      <div className="res-container">
        {/* <RestaurantCard name="Meghana Foods" cuisine="Biryani, Paratha, Chinese" rating="4.3" />
                <RestaurantCard name="KFC" cuisine="Burger, Fast Foods, Biryani, Hot Wings" rating="4.0" />
                <RestaurantCard name="Dominos" cuisine="Pizza, Burger" rating="3.9" />
                <RestaurantCard name="PizzaHut" cuisine="Pizza" rating="4.4" />
                <RestaurantCard name="Haldiram" cuisine="Chole Bhature, Sweets" rating="5.0" />
                <RestaurantCard name="Hira Sweets" cuisine="Sweets" rating="3.5" />
                <RestaurantCard name="Meghana Foods" cuisine="Biryani, Paratha, Chinese" rating="4.3" />
                <RestaurantCard name="KFC" cuisine="Burger, Fast Foods, Biryani, Hot Wings" rating="4.0" />
                <RestaurantCard name="Dominos" cuisine="Pizza, Burger" rating="3.9" />
                <RestaurantCard name="PizzaHut" cuisine="Pizza" rating="4.4" />
                <RestaurantCard name="Haldiram" cuisine="Chole Bhature, Sweets" rating="5.0" />
                <RestaurantCard name="Hira Sweets" cuisine="Sweets" rating="3.5" />
                <RestaurantCard name="Meghana Foods" cuisine="Biryani, Paratha, Chinese" rating="4.3" />
                <RestaurantCard name="KFC" cuisine="Burger, Fast Foods, Biryani, Hot Wings" rating="4.0" />
                <RestaurantCard name="Dominos" cuisine="Pizza, Burger" rating="3.9" />
                <RestaurantCard name="PizzaHut" cuisine="Pizza" rating="4.4" />
                <RestaurantCard name="Haldiram" cuisine="Chole Bhature, Sweets" rating="5.0" />
                <RestaurantCard name="Hira Sweets" cuisine="Sweets" rating="3.5" /> */}

        {/* using zomato api */}

        {/* <RestaurantCard cardsData = {cardsList[0]} />
                <RestaurantCard cardsData = {cardsList[1]} />
                <RestaurantCard cardsData = {cardsList[2]} />
                <RestaurantCard cardsData = {cardsList[3]} />
                <RestaurantCard cardsData = {cardsList[4]} />
                <RestaurantCard cardsData = {cardsList[5]} />
                <RestaurantCard cardsData = {cardsList[6]} />
                <RestaurantCard cardsData = {cardsList[7]} />
                <RestaurantCard cardsData = {cardsList[8]} />
                <RestaurantCard cardsData = {cardsList[9]} />
                <RestaurantCard cardsData = {cardsList[10]} /> */}

        {/* optimize code using map filter reduce */}

        {filteredRestaurants?.map((restaurant) => (
          <Link className="res-card-link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >


            {/* for higher order function that will give us label of promoted if card is promoted */}
            {restaurant?.info?.isOpen ? (
              <RestaurantCardPromoted cardsData={restaurant} />
            ) : (
              <RestaurantCard cardsData={restaurant} />
            )}
          </Link>
        ))}
        {/* map for each restaurant returning a piece of jsx */}
      </div>
    </div>
  );
};

export default Body;
