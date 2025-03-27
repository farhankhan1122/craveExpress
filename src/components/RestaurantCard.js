import React, { useContext } from "react";
import { LOGO_URL } from "../utils.js/constants";
import { CDN_URL } from "../utils.js/constants";
import UserContext from "../utils.js/userContext";

const RestaurantCard = (props) => {
    const { loggedInUser } = useContext(UserContext)
    // some dev destructuring on the fly instead of props in ()
    // (props) => ({name, cuisine})
    // const { name, cuisine} = props
    // console.log(props);
    // using zomato api
    // lets clean our code i.e destructure data because cardsData.info is repeating again and again
    const { cardsData } = props
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = cardsData?.info
    // const {deliveryTime} = cardsData?.order
    // this is ?. is optional chaining
    return (
        <div className="res-card">
            {/* <div className="res-card-image">
            <img src={CDN_URL + cloudinaryImageId} alt="" />
            </div> */}


            <div className="sc-jdUcAg fhJZcJ">
                <div className="sc-bddgXz kSoVYh">
                    <div width="100%" height="100%" className="res-card-image sc-gweoQa iJKEuv">
                        <img className="sc-bXCLTC jRHowI" src={CDN_URL + cloudinaryImageId} alt="The Veg Legacy" />
                        <div className="sc-kbdlSk fceOPJ sc-eIcdZJ eVjRpt">
                            <div className="sc-aXZVg jJrxcx sc-camqpD jZhezl">
                            </div>
                            <div className="sc-aXZVg kUePhA sc-camqpD jZhezl"> ITEMS AT ₹139</div>
                            <div className="sc-aXZVg frdsPz sc-camqpD jZhezl"></div>
                        </div>
                    </div>
                </div>
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
                    <p>{loggedInUser}</p>
                </div>
            </div>
        </div>
    )

}

// Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

// returning functional component
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative overflow-hidden rounded-t-[16px]">
                <label className="absolute rounded-sm text-white text-[13px] px-[5px] bg-green-500" >Now Open</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
export default RestaurantCard;