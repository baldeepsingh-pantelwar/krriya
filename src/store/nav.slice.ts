import { View } from "@/types/nav";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    view: "top-10" as View,
  },
  reducers: {
    setView(state, action: PayloadAction<View>) {
      state.view = action.payload;
    },
  },
});
