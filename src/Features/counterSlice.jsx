//defining store variable and initilize it

//the main task of slice is
//to initilize variable
// and to reinitilize variable
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "nitan",
  age: 29,
  isMarried: false,
};

export const counterSlice = createSlice({
  // give name unique
  name: "infoSlice",
  //this name can be any ,note the type of action will be name/reducer eg counteryou/increment ....no need to care about
  //just remeber use name unique
  initialState: initialStateValue,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { changeName, changeAge } = counterSlice.actions;

export default counterSlice.reducer;
