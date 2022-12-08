import "index.scss";

export const Comments = () => {
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
      {comments.map((comment) => (
        <div key={comment.userId} className={"comment"}>
          <div className={"userInfo"}>
            <img src={comment.userImage} />
            <span>{comment.userName}</span>
          </div>
          <p>{comment.description}</p>
        </div>
      ))}
    </div>
  );
};
