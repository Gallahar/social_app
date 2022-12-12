import { TAuthUser } from "../store/auth/types";

type TUserLSData = () => null | TAuthUser;

export const getUserLSData: TUserLSData = () => {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
};
