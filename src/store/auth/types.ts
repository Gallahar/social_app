export interface IAuthState {
  user: TAuthUser | null;
}

export type TAuthUser = {
  id: string;
  imgUrl: string;
};
