import "./index.scss";
import otherUser from "../../assets/otherUser.jpg";

export const RightBar = () => {
  return (
    <div className={"rightBar"}>
      <div className={"container"}>
        <div className={"item"}>
          <span>Suggestions for you</span>
          <div className={"user"}>
            <div className={"userInfo"}>
              <img src={otherUser} alt="user" />
              <span>Zabec Wilsky</span>
            </div>
            <div className={"buttons"}>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className={"user"}>
            <div className={"userInfo"}>
              <img src={otherUser} alt="user" />
              <span>Zabec Wilsky</span>
            </div>
            <div className={"buttons"}>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className={"item"}>
          <span>Latest activities</span>
          <div className={"user"}>
            <div className={"userInfo"}>
              <img src={otherUser} alt="user" />
              <span>Zabec Wilsky</span>
              <p>Changed their avatar picture</p>
            </div>
            <p>1 min ago</p>
          </div>
          <div className={"user"}>
            <div className={"userInfo"}>
              <img src={otherUser} alt="user" />
              <span>Zabec Wilsky</span>
              <p>Leaved a comment</p>
            </div>
            <p>4 min ago</p>
          </div>
          <div className={"user"}>
            <div className={"userInfo"}>
              <img src={otherUser} alt="user" />
              <span>Zabec Wilsky</span>
              <p>Liked other profile picture</p>
            </div>
            <p>5 min ago</p>
          </div>
          <div className={"user"}>
            <div className={"userInfo"}>
              <img src={otherUser} alt="user" />
              <span>Zabec Wilsky</span>
              <p>Start discussion in comments</p>
            </div>
            <p>6 min ago</p>
          </div>
        </div>
        <div className={"item"}>
          <span>Online friends</span>
          <div className={"user"}>
            <div className={"userInfo"}>
              <img src={otherUser} alt="user" />
              <div className={"online"} />
              <span>Zabec Wilsky</span>
            </div>
          </div>
          <div className={"user"}>
            <div className={"userInfo"}>
              <img src={otherUser} alt="user" />
              <div className={"online"} />
              <span>Zabec Wilsky</span>
            </div>
          </div>
          <div className={"user"}>
            <div className={"userInfo"}>
              <img src={otherUser} alt="user" />
              <div className={"online"} />
              <span>Zabec Wilsky</span>
            </div>
          </div>
          <div className={"user"}>
            <div className={"userInfo"}>
              <img src={otherUser} alt="user" />
              <div className={"online"} />
              <span>Zabec Wilsky</span>
            </div>
          </div>
          <div className={"user"}>
            <div className={"userInfo"}>
              <img src={otherUser} alt="user" />
              <div className={"online"} />
              <span>Zabec Wilsky</span>
            </div>
          </div>
          <div className={"user"}>
            <div className={"userInfo"}>
              <img src={otherUser} alt="user" />
              <div className={"online"} />
              <span>Zabec Wilsky</span>
            </div>
          </div>
          <div className={"user"}>
            <div className={"userInfo"}>
              <img src={otherUser} alt="user" />
              <div className={"online"} />
              <span>Zabec Wilsky</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
