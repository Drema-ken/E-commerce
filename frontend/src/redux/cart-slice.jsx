import { createSlice } from "@reduxjs/toolkit";
import vvs from "../assets/images/vvs.jpg";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);

      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity += 1;
    },
    removeFromCart(state, action) {
      const newItemId = action.payload.id;
      const itemIndex = state.products.find(
        (product) => product.id === newItemId
      );
      if (itemIndex) {
        state.totalPrice -= itemIndex.totalPrice;
        state.totalQuantity -= itemIndex.quantity;
        state.products = state.products.filter((item) => item.id !== newItemId);
      }
    },
    increaseProductQuantity(state, action) {
      const productId = action.payload.id;
      const productIndex = state.products.find((item) => item.id === productId);
      productIndex.quantity++;
      state.totalPrice += productIndex.price;
      state.totalQuantity++;
    },
    decreaseProductQuantity(state, action) {
      const productId = action.payload.id;
      const productIndex = state.products.find((item) => item.id === productId);
      productIndex.quantity--;
      state.totalPrice -= productIndex.price;
      state.totalQuantity--;
    },
    addShippingInfo(state, action) {
      state.shippingInfo = action.payload;
    },
  },
});

export const {
  addShippingInfo,
  addToCart,
  increaseProductQuantity,
  removeFromCart,
  decreaseProductQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
