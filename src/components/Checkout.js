import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Checkout.css";
import { addItems, removeItems } from "../utils.js/store/slices/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [selectedPayment, setSelectedPayment] = useState("upi");
  console.log(items, "itemssa");

  const mergedItems = items.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.card.info.id === item.card.info.id);

    if (existingItem) {
      existingItem.card.info.quantity += 1; // Increase quantity if item already exists
    } else {
      acc.push({
        ...item,
        card: { ...item.card, info: { ...item.card.info, quantity: 1 } },
      }); // Add item with quantity 1
    }

    return acc;
  }, []);
  console.log(mergedItems, "mergedItems");

  const totalOrderValue = mergedItems.reduce(
    (total, item) =>
      total +
      ((item?.card?.info?.defaultPrice ?? item?.card?.info?.price ?? 0) / 100) * (item?.card?.info?.quantity ?? 1),
    0
  );

  //   const getItemCount = (itemId) => {
  //     return items.filter((item) => item?.card?.info?.id === itemId).length;
  //   };

  const handleAddItem = (item) => {
    dispatch(addItems(item)); // Add item to cart
  };

  //   const handleRemoveItem = (item) => {
  //     dispatch(removeItems(item)); // Remove item from cart
  //   };
  const handleRemoveItem = (item) => {
    if (item.card.info.quantity > 1) {
      dispatch(removeItems(item)); // Reduce quantity in store
    } else {
      // Optional: If quantity is 1, remove the item completely
      dispatch(removeItems(item));
    }
  };

  return (
    <>
      {items.length != 0 ? (
        <div className="checkout-container">
          <div className="cart-section">
            <div className="cart-header">
              <h2>Cart Items {items.length}</h2>
              <span>Restaurant Name</span>
            </div>

            <div className="cart-items">
              {mergedItems.map((item) => {
                return (
                  <div key={item?.card?.info?.id} className="cart-item">
                    <div className="item-details">
                      <div
                        className={
                          item?.card?.info?.itemAttribute?.vegClassifier ==
                          "VEG"
                            ? "veg-badge"
                            : "non-veg-badge"
                        }
                      ></div>
                      <div>
                        <h3>{item?.card?.info?.name}</h3>
                        <p>
                          ₹{" "}
                          {((item?.card?.info?.defaultPrice ??
                            item?.card?.info?.price ??
                            0) /
                            100) *
                            (item?.card?.info?.quantity ?? 1)}
                        </p>
                      </div>
                    </div>
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => handleRemoveItem(item)}
                      >
                        -
                      </button>
                      <span>{item?.card?.info?.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => handleAddItem(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bill-details">
              <div className="bill-row">
                <span>Item Total</span>
                {/* <span>₹ {{totalOrderValue}}</span> */}
                <span>₹ {totalOrderValue}</span>
              </div>
              <div className="bill-row">
                <span>Delivery Fee</span>
                <span>₹40</span>
              </div>
              <div className="bill-row">
                <span>Platform Fee</span>
                <span>₹5</span>
              </div>
              <div className="bill-row">
                <span>GST and Restaurant Charges</span>
                <span>₹80</span>
              </div>
              <div className="bill-row bill-total">
                <span>TO PAY</span>
                <span>₹ {totalOrderValue + 40 + 5 + 80}</span>
              </div>
            </div>
          </div>

          <div className="payment-section">
            <h2>Delivery Address</h2>
            <div className="address-form">
              <div className="form-group">
                <label>Complete Address</label>
                <textarea
                  rows="3"
                  placeholder="House/Flat No., Building Name, Street Name, Area"
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
            </div>

            <h2>Payment Method</h2>
            <div className="payment-methods">
              <div
                className={`payment-method ${
                  selectedPayment === "upi" ? "active" : ""
                }`}
                onClick={() => setSelectedPayment("upi")}
              >
                <input
                  type="radio"
                  checked={selectedPayment === "upi"}
                  readOnly
                />
                <span>UPI</span>
              </div>
              <div
                className={`payment-method ${
                  selectedPayment === "card" ? "active" : ""
                }`}
                onClick={() => setSelectedPayment("card")}
              >
                <input
                  type="radio"
                  checked={selectedPayment === "card"}
                  readOnly
                />
                <span>Credit/Debit Card</span>
              </div>
              <div
                className={`payment-method ${
                  selectedPayment === "cod" ? "active" : ""
                }`}
                onClick={() => setSelectedPayment("cod")}
              >
                <input
                  type="radio"
                  checked={selectedPayment === "cod"}
                  readOnly
                />
                <span>Cash on Delivery</span>
              </div>
            </div>

            <button className="place-order-btn">Place Order</button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="min-h-[300px] flex items-center justify-center">
            Cart is Empty. Add Items to the Cart!
          </h3>
        </>
      )}
    </>
  );
};

export default Checkout;
