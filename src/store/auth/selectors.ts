import { RootStore } from "../index";

export const selectCurrentUser = (state: RootStore) => state.userAuth.user;
