import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils.js/constants";
import { addItems, removeItems } from "../utils.js/store/slices/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  // const itemCount = cartItems.filter(cartItem => cartItem.id === items?.cart?.info?.id).length
  console.log(cartItems, "cartItems")

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
  console.log(cartItems, "cartItems");


  return (
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
                <img
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
                    onClick={() => handleAddItem(item)}
                    className="absolute bottom-[-10px] left-[50%] translate-x-[-50%] bg-white px-[20px] leading-[24px] font-[800] text-[18px] text-greentextcolor border-[1px] border-buttonbordercolor rounded-[8px] h-[40px]"
                  >
                    ADD
                  </button>
                )}
              </div>
            </div>
          </div>)
      })}
    </div>
  );
};
// you have called the functions already
//     onClick={handleAddItem(item)}
// onClick={() => handleAddItem(item)}

export default ItemList;
