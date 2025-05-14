import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils.js/constants";
import { addItems, removeItems } from "../utils.js/store/slices/cartSlice";
import { useState } from "react";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  // const itemCount = cartItems.filter(cartItem => cartItem.id === items?.cart?.info?.id).length
  console.log(cartItems, "cartItems")

  const [selectedDish, setSelectedDish] = useState(null);

  // const handleAddItem = (item) => {
  //   // Dispatch an action with the item as payload
  //   dispatch(addItems(item))
  // };

  // const handleRemoveItem = (item) => {
  //   dispatch(removeItems(item)); // Remove item from cart
  // };

  // const handleIncreaseQuantity = (item) => {
  //   dispatch(addItems(item)); // Increase quantity of the item in cart
  // };

  // const handleDecreaseQuantity = (item) => {
  //   // if (item.quantity > 1) {
  //   dispatch(removeItems(item)); // Decrease quantity of the item
  //   // }
  // };

  const getItemCount = (itemId) => {
    return cartItems.filter(cartItem => cartItem?.card?.info?.id === itemId).length;
  };

  const handleAddItem = (item) => {
    dispatch(addItems(item)); // Add item to cart
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItems(item)); // Remove item from cart
  };

  // const cartItem = useSelector((item) => {
  //   dispatch(removeItems(item.id))
  // } 
  // )
  console.log(selectedDish, "selectedDish");


  return (
    <>
      <div>
        {items.map((item) => {
          const itemCount = getItemCount(item?.card?.info?.id);
          console.log(itemCount, "itemCount");

          return (
            <div
              key={item.card.info.id}
              className="w-full border-b-[1px] py-[25px] flex items-center justify-between"
            >
              <div className="flex flex-col ">
                <span className="text-[16px] tracking-[-0.3px] text-textcolor font-[700]">
                  {item.card.info.name}
                </span>
                <span className="text-[14px] tracking-[-0.3px] text-textcolor font-[400]">
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
                <span className="text-[14px] leading-[19px] mt-[12px] tracking-[-0.3px] text-textlightcolor font-[200]">
                  {item.card.info.description}
                </span>
                {/* <hr /> */}
              </div>
              <div className="relative w-[156px] h-[144px] shrink-0 ml-[60px] bg-imageBackground rounded-[12px]">
                {item.card.info.imageId && (
                  <img onClick={() => setSelectedDish(item)}
                    className="w-full h-full rounded-[12px]"
                    src={CDN_URL + item?.card?.info?.imageId}
                    alt=""
                  />
                )}
                {/* <div className="relative">
                {(cartItems.length > 0) &&
                  <button onClick={() => handleDecreaseQuantity(item)} className="mr-[20px] absolute bottom-[-10px] left-[20px] translate-x-[-50%] bg-white leading-[24px] font-[800] text-[18px] text-greentextcolor h-[40px]">
                    -
                  </button>

                }
                {cartItems.length === 0 ?

                  <button
                    onClick={() => handleAddItem(item)}
                    className="absolute bottom-[-10px] left-[50%] translate-x-[-50%] bg-white flex items-center justify-center px-[20px] leading-[24px] font-[800] text-[18px] text-greentextcolor border-[1px] border-buttonbordercolor rounded-[8px] h-[40px]">
                    ADD
                  </button>
                  :
                  <p className="absolute bottom-[-10px] left-[50%] translate-x-[-50%] bg-white flex items-center justify-center px-[20px] leading-[24px] font-[800] text-[18px] text-greentextcolor border-[1px] border-buttonbordercolor rounded-[8px] h-[40px]">
                    {cartItems.length}
                  </p>


                }
                {(cartItems.length > 0) &&
                  <button onClick={() => handleIncreaseQuantity(item)} className="ml-[20px] absolute bottom-[-10px] right-[10px] translate-x-[-50%] bg-white leading-[24px] font-[800] text-[18px] text-greentextcolor h-[40px]">
                    +
                  </button>

                }
              </div> */}
                <div className="relative">
                  {/* If item is in cart, show - and quantity */}
                  {itemCount > 0 ? (
                    <div className="absolute bottom-[-10px] h-[40px] left-[50%] translate-x-[-50%] flex items-center bg-white border border-buttonbordercolor rounded-[8px] px-2 z-[999]">
                      <button
                        onClick={() => handleRemoveItem(item)}
                        className="px-2 font-bold text-[18px] text-greentextcolor"
                      >
                        -
                      </button>
                      <span className="px-2">{itemCount}</span>
                      <button
                        onClick={() => handleAddItem(item)}
                        className="px-2 font-bold text-[18px] text-greentextcolor"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddItem(item)
                      }}
                      className="absolute bottom-[-10px] left-[50%] translate-x-[-50%] bg-white px-[20px] leading-[24px] font-[800] text-[18px] text-greentextcolor border-[1px] border-buttonbordercolor rounded-[8px] h-[40px]"
                    >
                      ADD
                    </button>
                  )}
                </div>
              </div>

            </div>)
        })}
        {/* popover */}
        {/* {selectedDish && (
          <>
            {(() => {
              const itemCount = getItemCount(selectedDish.card.info.id);
              return (
                <div className="sc-brPLxw gHuzQH visible">
                  <div className="sc-gFVvzn fynuqy open">
                    <figure className="sc-jiBWvh jEDMSm">
                      <img className="sc-bXCLTC gZFEIq _3XIdj" src={CDN_URL + selectedDish.card.info.imageId} alt={selectedDish.card.info.name} />
                    </figure>
                    <div className="sc-gazJty hnMddS">
                      <div>
                        <div aria-hidden="true" className="sc-aXZVg eqSzsP sc-cIAbwb dACVoM">{selectedDish.card.info.name}</div>
                        <div className="sc-ldMllC lnJAAf"><span>₹{(selectedDish.card.info.price || selectedDish.card.info.defaultPrice) / 100}</span></div>
                      </div>
                      <div className="sc-frjntI gkXzyV">
                        <div className="relative">
                          {itemCount > 0 ? (
                            <div className="absolute bottom-[-10px] h-[40px] left-[50%] translate-x-[-50%] flex items-center bg-white border border-buttonbordercolor rounded-[8px] px-2">
                              <button
                                onClick={() => handleRemoveItem(selectedDish)}
                                className="px-2 font-bold text-[18px] text-greentextcolor"
                              >
                                -
                              </button>
                              <span className="px-2">{itemCount}</span>
                              <button
                                onClick={() => handleAddItem(selectedDish)}
                                className="px-2 font-bold text-[18px] text-greentextcolor"
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddItem(selectedDish)
                              }}
                              className="absolute bottom-[-10px] left-[50%] translate-x-[-50%] bg-white px-[20px] leading-[24px] font-[800] text-[18px] text-greentextcolor border-[1px] border-buttonbordercolor rounded-[8px] h-[40px]"
                            >
                              ADD
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="sc-aXZVg gCijQr sc-ilsNdd davmMy">{selectedDish.card.info.description}</div>
                    <button onClick={() => setSelectedDish(null)} aria-label="Close" className="sc-iMWBiJ bCWyNK">
                      <svg
                        fill='#000'
                        height="40px"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" />
                      </svg>
                    </button>
                  </div>
                </div>

              )
            })}
          </>
        )} */}

         {/* popover */}
        {selectedDish && (
          <div className="sc-brPLxw gHuzQH visible">
                  <div className="sc-gFVvzn fynuqy open">
                    <figure className="sc-jiBWvh jEDMSm">
                      <img className="sc-bXCLTC gZFEIq _3XIdj" src={CDN_URL + selectedDish.card.info.imageId} alt={selectedDish.card.info.name} />
                    </figure>
                    <div className="sc-gazJty hnMddS">
                      <div>
                        <div aria-hidden="true" className="sc-aXZVg eqSzsP sc-cIAbwb dACVoM">{selectedDish.card.info.name}</div>
                        <div className="sc-ldMllC lnJAAf"><span>₹{(selectedDish.card.info.price || selectedDish.card.info.defaultPrice) / 100}</span></div>
                      </div>
                      {/* <div className="sc-frjntI gkXzyV">
                        <div className="relative">
                          {itemCount > 0 ? (
                            <div className="absolute bottom-[-10px] h-[40px] left-[50%] translate-x-[-50%] flex items-center bg-white border border-buttonbordercolor rounded-[8px] px-2">
                              <button
                                onClick={() => handleRemoveItem(item)}
                                className="px-2 font-bold text-[18px] text-greentextcolor"
                              >
                                -
                              </button>
                              <span className="px-2">{itemCount}</span>
                              <button
                                onClick={() => handleAddItem(item)}
                                className="px-2 font-bold text-[18px] text-greentextcolor"
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddItem(item)
                              }}
                              className="absolute bottom-[-10px] left-[50%] translate-x-[-50%] bg-white px-[20px] leading-[24px] font-[800] text-[18px] text-greentextcolor border-[1px] border-buttonbordercolor rounded-[8px] h-[40px]"
                            >
                              ADD
                            </button>
                          )}
                        </div>
                      </div> */}
                    </div>
                    <div className="sc-aXZVg gCijQr sc-ilsNdd davmMy">{selectedDish.card.info.description}</div>
                    <button onClick={() => setSelectedDish(null)} aria-label="Close" className="sc-iMWBiJ bCWyNK">
                      <svg
                        fill='#000'
                        height="40px"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" />
                      </svg>
                    </button>
                  </div>
                </div>
        )}
      </div>
    </>
  );
};
// you have called the functions already
//     onClick={handleAddItem(item)}
// onClick={() => handleAddItem(item)}

export default ItemList;
