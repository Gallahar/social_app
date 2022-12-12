export interface IAuthState {
  user: TAuthUser | null;
}

export type TAuthUser = {
  id: string;
  userName: string;
  imgUrl: string;
  profilePicture: string;
};
