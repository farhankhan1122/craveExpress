import React from "react";
import { LOGO_URL } from "../utils.js/constants";
import { CDN_URL } from "../utils.js/constants";

const RestaurantCard = (props) => {
    // some dev destructuring on the fly instead of props in ()
    // (props) => ({name, cuisine})
    // const { name, cuisine} = props
    // console.log(props);
    // using zomato api
    // lets clean our code i.e destructure data because cardsData.info is repeating again and again
    const {cardsData} = props
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = cardsData?.info
    // const {deliveryTime} = cardsData?.order
    // this is ?. is optional chaining
    return (
        <div className="res-card">
            <div className="res-card-image">
            <img src={CDN_URL + cloudinaryImageId} alt="" />
            </div>
            <div className="res-card-details">
                <h3 className="res-card-name">{name}</h3>
                <p className="res-card-cuisines">{cuisines[0].name}</p>
                <div className="res-card-subdetails">
                    <div className="star-rating">
                        <span>&#9733;</span>
                        <span>{avgRating}</span>
                    </div>
                    <span>.</span>
                    {/* <p>{deliveryTime}</p> */}
                    <span>.</span>
                    <p>{costForTwo}</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;