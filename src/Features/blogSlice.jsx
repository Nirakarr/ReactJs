//defining store variable and initilize it
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  title: "",
  description: "",
};

export const blogSlice = createSlice({
  // give name unique
  name: "blog",
  //this name can be any ,note the type of action will be name/reducer eg counteryou/increment ....no need to care about
  //just remeber use name unique
  initialState: initialStateValue,
  reducers: {
    changeBlogTitle: (state, action) => {
      state.title = action.payload;
    },
    changeBlogDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { changeBlogTitle, changeBlogDescription } = blogSlice.actions;

export default blogSlice.reducer;
