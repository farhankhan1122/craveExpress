import React from "react";
import RestaurantCard from "./RestaurantCard";
import cardsList from "../utils.js/mockData";
import { useState, useEffect } from "react";




const Body = () => {
    // local state variable - super powerful variable  scope is local
    const [listOfRestaurants, setListOfReastauants] = useState(cardsList)

    useEffect(() => {
        console.log("useEffect called");
    }, []);


    // normal js variable
    // scope is local
    let listOfRestaurantsJs = [
        // {
        //     "info": {
        //         "resId": 18895858,
        //         "name": "Guru Kripa Yadav Dhaba",
        //         "image": {
        //             "url": "https://b.zmtcdn.com/data/pictures/8/18895858/638e245b7c5b0a9470642cb87232104b_o2_featured_v2.jpg"
        //         },
        //         "rating": {
        //             "rating_text": "3.9",
        //         },
        //         "ratingNew": {
        //             "ratings": {
        //                 "DELIVERY": {
        //                     "rating": "4.0",
        //                 }
        //             }
        //         },
        //         "cft": {
        //             "text": "₹150 for two"
        //         },
        //         "cfo": {
        //             "text": "₹100 for one"
        //         },
        //         "cuisine": [
        //             {
        //                 "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
        //                 "url": "https://www.zomato.com/agra/restaurants/north-indian/",
        //                 "name": "North Indian"
        //             }
        //         ]
        //     },
        //     "order": {
        //         "deliveryTime": "31 min"
        //     }
        // },
        // {
        //     "info": {
        //         "resId": 18895859,
        //         "name": "KFC",
        //         "image": {
        //             "url": "https://b.zmtcdn.com/data/pictures/8/18895858/638e245b7c5b0a9470642cb87232104b_o2_featured_v2.jpg"
        //         },
        //         "rating": {
        //             "rating_text": "4.3",
        //         },
        //         "ratingNew": {
        //             "ratings": {
        //                 "DELIVERY": {
        //                     "rating": "4.3",
        //                 }
        //             }
        //         },
        //         "cft": {
        //             "text": "₹250 for two"
        //         },
        //         "cfo": {
        //             "text": "₹200 for one"
        //         },
        //         "cuisine": [
        //             {
        //                 "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
        //                 "url": "https://www.zomato.com/agra/restaurants/north-indian/",
        //                 "name": "North Indian"
        //             }
        //         ]
        //     },
        //     "order": {
        //         "deliveryTime": "35 min"
        //     }
        // },
        // {
        //     "info": {
        //         "resId": 18895850,
        //         "name": "MCD",
        //         "image": {
        //             "url": "https://b.zmtcdn.com/data/pictures/8/18895858/638e245b7c5b0a9470642cb87232104b_o2_featured_v2.jpg"
        //         },
        //         "rating": {
        //             "rating_text": "4.3",
        //         },
        //         "ratingNew": {
        //             "ratings": {
        //                 "DELIVERY": {
        //                     "rating": "4.3",
        //                 }
        //             }
        //         },
        //         "cft": {
        //             "text": "₹250 for two"
        //         },
        //         "cfo": {
        //             "text": "₹200 for one"
        //         },
        //         "cuisine": [
        //             {
        //                 "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
        //                 "url": "https://www.zomato.com/agra/restaurants/north-indian/",
        //                 "name": "North Indian"
        //             }
        //         ]
        //     },
        //     "order": {
        //         "deliveryTime": "35 min"
        //     }
        // }
    ];

    return (
        <div className="body">
            {/* function handleClick() {
                elert("hello")
            } */}
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.rating.rating_text > 4 );
                    setListOfReastauants(filteredList)
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

                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.resId} cardsData={ restaurant } />
                ))}
                     {/* map for each restaurant returning a piece of jsx */}

            </div>
        </div>
    )
}

export default Body;