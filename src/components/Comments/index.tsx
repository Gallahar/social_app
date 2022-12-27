import "./index.scss";
import blank from "../../assets/user.svg";
import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/auth/selectors";
import { dataApi } from "../../store/api";
import { TComment } from "../../store/api/types";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { Comment } from "../Comment";

type TCommentProps = {
  postId: number;
  data: TComment[];
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
};

export const Comments: React.FC<TCommentProps> = ({
  postId,
  data,
  error,
  isLoading,
}) => {
  const user = useSelector(selectCurrentUser);
  const [createComment] = dataApi.useCreateCommentMutation();
  const [input, setInput] = React.useState("");

  const onClickComment = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await createComment({
      description: input,
      postId,
    });
    setInput("");
  };

  return (
    <div className={"comments"}>
      <div className={"leaveComment"}>
        <img
          src={user?.profilePic ? user.profilePic : blank}
          alt={"userImage"}
        />
        <input
          type={"text"}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={"leave comment?"}
        />
        <button onClick={onClickComment}>comment</button>
      </div>
      {isLoading && <h1>Comments loading...</h1>}
      {error && <h1>something went wrong, try refresh the page</h1>}
      {data &&
        data.map((comment) => <Comment key={comment.id} comment={comment} />)}
    </div>
  );
};
