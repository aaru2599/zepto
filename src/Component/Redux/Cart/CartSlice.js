import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("selectCart")) || [],
};
const MAX_COUNT = 9;
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const myData = action.payload;
      const existingProductIndex = state.data.findIndex(
        (item) => item.product_id === myData.product_id
      );

      if (existingProductIndex === -1) {
        // If the product is not in the cart, add it with count 1
        state.data.push({ ...myData, count: 1 });
      } else {
        // If the product is already in the cart, check if count < MAX_COUNT
        const existingData = state.data[existingProductIndex];
        if (existingData.count < MAX_COUNT) {
          existingData.count++;
        } else {
          // If count is already at MAX_COUNT, don't allow addition
          //console.log("Cannot add more of this product, max limit reached.");
        }
      }
      localStorage.setItem("selectCart", JSON.stringify(state.data));
    },

    removeFromCart: (state, action) => {
      const productRemove = action.payload;
      const productIndex = state.data.findIndex(
        (item) => item.product_id === productRemove.product_id
      );
      if (productIndex !== -1) {
        state.data.splice(productIndex, 1);
      }
      localStorage.setItem("selectCart", JSON.stringify(state.data));
    },

    resetCartData: (state) => {
      state.data = [];
      // localStorage.setItem("btnData",JSON.stringify({}))
    },
    updateCartQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const productToUpdate = state.data.find(
        (item) => item.product_id === productId
      );
      if (productToUpdate) {
        productToUpdate.count = quantity;

        if (quantity === 0) {
          const productIndex = state.data.findIndex(
            (item) => item.product_id === productId
          );
          if (productIndex) {
            state.data.splice(productIndex, 1);
          }
        }
      }
      localStorage.setItem("selectCart", JSON.stringify(state.data));
    },
  },
});
export const { addToCart, removeFromCart, updateCartQuantity, resetCartData } =
  cartSlice.actions;
export default cartSlice.reducer;
