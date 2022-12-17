import { TAuthCurrentUser } from "../store/auth/types";

type TUserLSData = () => null | TAuthCurrentUser;

export const getUserLSData: TUserLSData = () => {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
};
