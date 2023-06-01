//defining store variable and initilize it
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  format: "odi",
  over: "50",
};

export const cricketSlice = createSlice({
  // give name unique
  name: "cricket",
  //this name can be any ,note the type of action will be name/reducer eg counteryou/increment ....no need to care about
  //just remeber use name unique
  initialState: initialStateValue,
  reducers: {
    changeFormatName: (state, action) => {
      state.format = action.payload;
    },
    changeOver: (state, action) => {
      state.format = action.payload;
    },
  },
});

export const { changeCricketFormat, changeCricketOver } = cricketSlice.actions;

export default cricketSlice.reducer;
