import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  locationData: "",
};
const recentSlice = createSlice({
  name: "recent_search",
  initialState,
  reducers: {
    updateRecentSearch: (state, action) => {
      state.data = action.payload;
    },
    updateLocation: (state, action) => {
      state.locationData = action.payload;
    },
    removeFromRecentSearch: (state, action) => {
      const productRemove = action.payload;
      const productIndex = state.data.findIndex(
        (item) => item === productRemove
      );
      if (productIndex !== -1) {
        state.data.splice(productIndex, 1);
      }
    },
  },
});
export const { updateRecentSearch, updateLocation,removeFromRecentSearch } = recentSlice.actions;
export default recentSlice.reducer;
