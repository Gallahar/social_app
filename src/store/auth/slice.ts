import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, TAuthUser } from "./types";
import { getUserLSData } from "../../utils/getUserLSData";

const initialState: IAuthState = {
  user: getUserLSData(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<TAuthUser>) => {
      state.user = action.payload;
    },
  },
});
export const { setLogin } = authSlice.actions;
export default authSlice.reducer;
