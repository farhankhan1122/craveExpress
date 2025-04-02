import { clearItems } from "../utils.js/store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
import Checkout from "./Checkout";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
/**
 *  do not like below just subscibe wahtever use in this component
 * subscibe only small portion of store
   const store = useSelector((store) => store);
   const cartItems = store.cart.item
 */
  

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[20px] font-[700] text-black">Checkout</h2>
        {/* <button
          onClick={handleClearCart}
          className="p-[10px] bg-black flex items-center justify-center border-[1px] border-buttonbordercolor rounded-[6px] h-[30px] text-white"
        >
          Clear cart
        </button> */}
      </div>
      {/* {cartItems.length === 0 && (<h3 className="min-h-[300px] flex items-center justify-center">Cart is Empty. Add Items to the Cart!</h3>)} */}
      {/* <ItemList items={cartItems} /> */}
      {/* <Checkout items={cartItems} /> */}
      {/* <Checkout items={cartItems} /> */}
      <Checkout />
    </div>
  );
};

export default Cart;
