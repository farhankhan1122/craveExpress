import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Shimmer from "./Shimmer?v=1";
import useRestaurantMenu from "../utils.js/customHooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useSelector } from "react-redux";

const RestaurantMenu = () => {
  const { redId } = useParams();
  const resInfo = useRestaurantMenu(redId);
  const [ showIndex , setShowIndex ] = useState(0)
  console.log(resInfo, "resInfo");

  const cartItems = useSelector((state) => state.cart.items);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };

  if (resInfo === null) return <Shimmer />;



//--------------------  Using Swiggy Api ------------------
  // const {
  //   name,
  //   cuisines,
  //   costForTwoMessage,
  //   avgRatingString,
  //   totalRatingsString,
  //   areaName,
  //   sla,
  // } = resInfo?.cards[2]?.card?.card?.info;


//--------------------  Using Static Data ------------------
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    areaName,
    sla,
  } = resInfo?.info;




  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo, "resInfo");


//--------------------  Using Swiggy Api ------------------
  // const categories =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.card?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );
  // console.log(categories, "categoriesaqaqa");


//--------------------  Using Static Data ------------------
const categories = resInfo?.categories

  return (
    <div className="menu container">
      <h1 className="ml-[16px] font-bold text-[28px] tracking-[-0.4px] text-textcolor">
        {name}
      </h1>
      <div className="res_menu_pg_tt">
        <div className="res_menu_pg_ttot">
          <div className="flex items-center gap-[6px] font-[700] text-[16px] tracking-[-0.3px] text-textcolor">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              strokeColor="rgba(2, 6, 12, 0.92)"
              fillcolor="rgba(2, 6, 12, 0.92)"
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
              ></circle>
              <path
                d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                fill="white"
              ></path>
              <defs>
                <linearGradient
                  id="StoreRating20_svg__paint0_linear_32982_71567"
                  x1="10"
                  y1="1"
                  x2="10"
                  y2="19"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#21973B"></stop>
                  <stop offset="1" stop-color="#128540"></stop>
                </linearGradient>
              </defs>
            </svg>
            {avgRatingString}({totalRatingsString}) - {costForTwoMessage}
          </div>
          <span className="eTOqDa">{cuisines.join(", ")}</span>
          <div>outlet - {areaName}</div>
          <div>{sla.slaString}</div>
        </div>
      </div>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul> */}

      <div className="font-bold text-[20px] flex justify-center my-[20px]">
        Menu
      </div>
      {/* Restaurant categories Accordion */}
      {/* below component is controlled */}
      {categories.map((category, index) => {
        return <RestaurantCategory 
        key={category?.card?.card.title} 
        data={category?.card?.card}
        // showItem={index === showIndex ? true : true} 
        // setShowIndex={() => setShowIndex(index)}/>;
        showItem={index === showIndex} 
        setShowIndex={() => setShowIndex(index === showIndex ? null : index)}/>
      })}

      {/* cart popup */}
      <div className="cart_popup_wrapper">
        <div className={`cart_popup ${cartItems.length > 0 ? "open_cart_popup" : ""}`}>
          <button onClick={handleClick} className="cart_pop_btn">
            <span className="flex items-center px-[16px] h-full">
              <span className="cart_span2 flex-1 font-bold">{cartItems.length} <span className="font-medium ml-[6px]">  Item Added</span></span>
              <span className="cart_span2">
                <span>View Cart</span>
                <span className="ml-[5px] border-none">
                  <svg
                  className="cart_svg cart_svg_color"
                  viewBox="-1 0 37 32"
                  height="20"
                  width="20"
                  fill="#ffffff"
                >
                  <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                </svg>
                </span>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
