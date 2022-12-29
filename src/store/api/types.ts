export type TLikes = {
  postId: number;
};
export type TFollow = {
  userId: number;
};

export type TComment = {
  id: number;
  description: string;
  username: null;
  created: string;
  userId: number;
  postId: number;
  profilePic: null | string;
  name: string;
};
export type TInputComment = {
  description: string;
  postId: number;
};

export type TInputPost = {
  description: string;
  img: string | null;
};

export type TPost = {
  created: null | string;
  description: string;
  id: number;
  img: string;
  name: string;
  profilePic: null | string;
  userId: number;
};

export enum EType {
  Post = "post",
  Comment = "comment",
  Like = "like",
  User = "user",
  Relationship = "relationship",
}

export type TUser = {
  backgroundPic: null | string;
  email: string;
  id: number;
  location: null | string;
  name: string;
  profilePic: null | string;
  username: string;
  website: null | string;
};
export type TInputUser = {
  profilePic: string | null;
  backgroundPic: string | null;
  input: TInput;
};
export type TInput = {
  name: string;
  location: string;
  website: string;
};
