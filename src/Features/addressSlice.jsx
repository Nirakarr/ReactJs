//defining store variable and initilize it
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  city: "kathmandu",
  province: 3,
};

export const counterSlice = createSlice({
  // give name unique
  name: "address",
  //this name can be any ,note the type of action will be name/reducer eg counteryou/increment ....no need to care about
  //just remeber use name unique
  initialState: initialStateValue,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    changeProvince: (state, action) => {
      state.province = action.payload;
    },
  },
});

export const { changeCity, changeProvince } = counterSlice.actions;

export default counterSlice.reducer;
