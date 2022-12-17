export interface IAuthState {
  user: TAuthCurrentUser | null;
}

export type TInputLogin = {
  username: string;
  password: string;
};

export type TAuthCurrentUser = {
  backgroundPic: null | string;
  email: string;
  id: number;
  location: null | string;
  name: string;
  profilePic: null | string;
  username: string;
  website: null | string;
};
