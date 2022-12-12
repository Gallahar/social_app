import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TThemeState } from "./types";
import { getThemeLSData } from "../../utils/getThemeLSData";

const initialState: TThemeState = {
  theme: getThemeLSData(),
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
