import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import switchTheme from "./theme/slice";
import userAuth from "./auth/slice";

export const store = configureStore({
  reducer: {
    switchTheme,
    userAuth,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootStore = ReturnType<typeof store.getState>;
