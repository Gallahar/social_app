import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TPost,
  TInputPost,
  TComment,
  TInputComment,
  TLikes,
  TUser,
  TFollow,
  TInputUser,
} from "./types";

export const dataApi = createApi({
  reducerPath: "data",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8900/server" }),
  tagTypes: ["Post", "Comment", "Like", "User", "Relationship"],
  endpoints: (build) => ({
    getPosts: build.query<TPost[], number | void>({
      query: (userId) => ({
        url: userId ? `/posts?userId=${userId}` : "/posts",
        credentials: "include",
      }),
      providesTags: () => ["Post"],
    }),
    createPost: build.mutation<TPost, TInputPost>({
      query: (post) => ({
        url: "/posts",
        credentials: "include",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: build.mutation<TPost, number>({
      query: (id) => ({
        url: `/posts?id=${id}`,
        credentials: "include",
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: build.mutation<TPost, number>({
      query: (id) => ({
        url: `/posts?id=${id}`,
        credentials: "include",
        method: "Patch",
        body: id,
      }),
      invalidatesTags: ["Post"],
    }),
    getComments: build.query<TComment[], number>({
      query: (postId) => ({
        url: `/comments?postId=${postId}`,
        credentials: "include",
      }),
      providesTags: () => ["Comment"],
    }),
    createComment: build.mutation<TComment, TInputComment>({
      query: (comment) => ({
        url: "/comments",
        credentials: "include",
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Comment"],
    }),
    deleteComment: build.mutation<TComment, number>({
      query: (id) => ({
        url: `/comments?id=${id}`,
        credentials: "include",
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Comment"],
    }),
    getLikes: build.query<number[], number>({
      query: (postId) => ({
        url: `/likes?postId=${postId}`,
        credentials: "include",
      }),
      providesTags: () => ["Like"],
    }),
    setLike: build.mutation<number[], TLikes>({
      query: (postId) => ({
        url: `/likes`,
        credentials: "include",
        method: "POST",
        body: postId,
      }),
      invalidatesTags: ["Like"],
    }),
    setDislike: build.mutation<number[], TLikes>({
      query: (postId) => ({
        url: `/likes?postId=${postId.postId}`,
        credentials: "include",
        method: "DELETE",
        body: postId,
      }),
      invalidatesTags: ["Like"],
    }),
    getUser: build.query<TUser, number>({
      query: (userId) => ({
        url: `/users/find/${userId}`,
        credentials: "include",
      }),
      providesTags: () => ["User"],
    }),
    updateUser: build.mutation<TUser, TInputUser>({
      query: (input) => ({
        url: "/users",
        credentials: "include",
        method: "PATCH",
        body: input,
      }),
      invalidatesTags: ["User"],
    }),
    getFollower: build.query<number[], number>({
      query: (userId) => ({
        url: `/relationships?followedUserId=${userId}`,
        credentials: "include",
      }),
      providesTags: () => ["Relationship"],
    }),
    setFollower: build.mutation<number[], TFollow>({
      query: (userId) => ({
        url: "/relationships",
        credentials: "include",
        method: "POST",
        body: userId,
      }),
      invalidatesTags: ["Relationship"],
    }),
    deleteFollower: build.mutation<number[], number>({
      query: (userId) => ({
        url: `/relationships?userId=${userId}`,
        credentials: "include",
        method: "DELETE",
        body: userId,
      }),
      invalidatesTags: ["Relationship"],
    }),
  }),
});
