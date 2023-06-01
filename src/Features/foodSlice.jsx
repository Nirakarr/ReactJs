//defining store variable and initilize it
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  foodName: "MOMO",
  foodType: "Snacks",
};

export const foodSlice = createSlice({
  // give name unique
  name: "Food",
  //this name can be any ,note the type of action will be name/reducer eg counteryou/increment ....no need to care about
  //just remeber use name unique
  initialState: initialStateValue,
  reducers: {
    changeFoodName: (state, action) => {
      state.format = action.payload;
    },
    changeFoodType: (state, action) => {
      state.format = action.payload;
    },
  },
});

export const { changeFoodName, changeFoodType } = foodSlice.actions;

export default foodSlice.reducer;
