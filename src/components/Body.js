import React from "react";
import RestaurantCard from "./RestaurantCard";
// import cardsList from "../utils.js/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // local state variable - super powerful variable  scope is local
  const [listOfRestaurants, setListOfReastauants] = useState([]);
  const [filteredRestaurants, setFilteredReastauants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.5803473&lng=80.6794592&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json, "json called");
    setListOfReastauants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredReastauants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    console.log(listOfRestaurants, "listOfRestaurantsss");
  };

  // normal js variable
  // scope is local

  return (
    <div className="body">
      {/* function handleClick() { 
                elert("hello")
            } */}
      <div className="filter" style={{ display: "flex" }}>
        <div className="search">
          <input
            className="search_input"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {/* filter the restraunt cards and update the ui */}
          {/* need search text */}
          {/* inputfield is restricting value to be typed because value searchText is tighted the value as empty  */}
          {/* whenever local variable changes react re render the component but only the changed value getting render with virtual dom(finding difference b/w older virtual dom and newer virtual dom)*/}
          {/* whenever state variables update , react triggers a reconciliation cycle(re-render the conponent) */}
          <button
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) => 
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setFilteredReastauants(filteredRestaurants)
            }}
            className="submit_search"
            type="button"
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.rating.rating_text > 4
            );
            setListOfReastauants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
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
          <RestaurantCard key={restaurant.info.id} cardsData={restaurant} />
        ))}
        {/* map for each restaurant returning a piece of jsx */}
      </div>
    </div>
  );
};

export default Body;
