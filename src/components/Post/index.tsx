import "./index.scss";
import React from "react";
import MoreIcon from "@mui/icons-material/MoreHorizOutlined";
import { Link } from "react-router-dom";
import LikeIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import CommentIcon from "@mui/icons-material/MessageOutlined";
import ShareIcon from "@mui/icons-material/ReplyOutlined";
import LikeFilledIcon from "@mui/icons-material/ThumbUp";
import { Comments } from "../Comments";
type TPostProps = {
  post: {
    id: number;
    userId: number;
    userName: string;
    userImg: string;
    imgUrl: string;
    description?: string;
  };
};

export const Post: React.FC<TPostProps> = ({ post }) => {
  const [open, setOpen] = React.useState(false);
  const liked = false;
  return (
    <div className={"post"}>
      <div className={"container"}>
        <div className={"user"}>
          <div className={"userInfo"}>
            <img src={post.userImg} alt={"userImg"} />
            <div className={"details"}>
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className={"name"}>{post.userName}</span>
              </Link>
              <span className={"date"}>1 minute ago</span>
            </div>
          </div>
          <MoreIcon />
        </div>
        <div className={"content"}>
          <p>{post.description}</p>
          <img src={post.imgUrl} alt={"contentImage"} />
        </div>
        <div className={"interactiveButtons"}>
          <div className={"item"}>
            {liked ? <LikeFilledIcon /> : <LikeIcon />}
            <span>12 likes</span>
          </div>
          <div className={"item"} onClick={() => setOpen(!open)}>
            <CommentIcon />
            <span>5 Comments</span>
          </div>
          <div className={"item"}>
            <ShareIcon />
            <span>3 Share</span>
          </div>
        </div>
        {open ? <Comments /> : ""}
      </div>
    </div>
  );
};
