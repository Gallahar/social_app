import blank from "../../assets/user.svg";
import moment from "moment";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import { TComment } from "../../store/api/types";
import { dataApi } from "../../store/api";

type TCommentProps = {
  comment: TComment;
};

export const Comment: React.FC<TCommentProps> = ({ comment }) => {
  const [deleteComment] = dataApi.useDeleteCommentMutation();

  const onClickClear = async (id: number) => {
    if (window.confirm("do you really want delete your comment?")) {
      await deleteComment(id);
    }
  };

  return (
    <div key={comment.id} className={"comment"}>
      <img src={comment?.profilePic ? comment.profilePic : blank} />
      <div className={"userInfo"}>
        <span>{comment.name}</span>
        <p>{comment.description}</p>
      </div>
      <span className={"date"}>{moment(comment.created).fromNow()}</span>
      <ClearIcon onClick={() => onClickClear(comment.id)} className={"clear"} />
    </div>
  );
};
