//defining store variable and initilize it
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "Apple",
  price: 28,
  quantity: 10,
};

export const productSlice = createSlice({
  // give name unique
  name: "product",
  //this name can be any ,note the type of action will be name/reducer eg counteryou/increment ....no need to care about
  //just remeber use name unique
  initialState: initialStateValue,
  reducers: {
    changeProductName: (state, action) => {
      state.name = action.payload;
    },
    changeProductPrice: (state, action) => {
      state.price = action.payload;
    },
    changeProductQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const { changeProductQuantity, changeProductPrice, changeProductName } =
  productSlice.actions;

export default productSlice.reducer;
