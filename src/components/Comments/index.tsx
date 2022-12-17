import "./index.scss";
import blank from "../../assets/user.svg";
import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/auth/selectors";

export const Comments = () => {
  const user = useSelector(selectCurrentUser);
  const comments = [
    {
      id: 1,
      description: "fdsaojfoidsjagpojisag[jds[fsdjag[sdaijg[sajig",
      userId: 1,
      userName: "Harley Wins",
      userImage:
        "https://images.unsplash.com/photo-1604607055958-4def78942d6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      description: "fdsaojfoidsjagpojisag[jds[fsdjag[sdaijg[sajig",
      userId: 2,
      userName: "Harley Wins",
      userImage:
        "https://images.unsplash.com/photo-1604607055958-4def78942d6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      description: "fdsaojfoidsjagpojisag[jds[fsdjag[sdaijg[sajig",
      userId: 3,
      userName: "Harley Wins",
      userImage:
        "https://images.unsplash.com/photo-1604607055958-4def78942d6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div className={"comments"}>
      <div className={"leaveComment"}>
        <img
          src={user?.profilePic ? user.profilePic : blank}
          alt={"userImage"}
        />
        <input type={"text"} placeholder={"leave comment?"} />
        <button>comment</button>
      </div>
      {comments.map((comment) => (
        <div key={comment.userId} className={"comment"}>
          <img src={comment.userImage} />
          <div className={"userInfo"}>
            <span>{comment.userName}</span>
            <p>{comment.description}</p>
          </div>
          <span className={"date"}>1 minute ago</span>
        </div>
      ))}
    </div>
  );
};
