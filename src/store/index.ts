import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import switchTheme from "./theme/slice";

export const store = configureStore({
  reducer: {
    switchTheme,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootStore = ReturnType<typeof store.getState>;
