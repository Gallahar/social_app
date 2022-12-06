import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, TAuthUser } from "./types";

const initialState: IAuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<TAuthUser>) => {
      state.user = action.payload;
    },
  },
});
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
