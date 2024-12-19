import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"  // This comes from the default export

const appStore = configureStore({
 reducer: {
    cart: cartReducer  // Mapping the "cart" slice
 }
})

export default appStore;