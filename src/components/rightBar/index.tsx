import styles from "./index.module.scss";
import otherUser from "../../assets/otherUser.jpg";

export const RightBar = () => {
  return (
    <div className={styles.rightBar}>
      <div className={styles.container}>
        <div className={styles.item}>
          <span>Suggestions for you</span>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img src={otherUser} alt="user" />
              <span>Zabec Wilsky</span>
            </div>
            <div className={styles.buttons}>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img src={otherUser} alt="user" />
              <span>Zabec Wilsky</span>
            </div>
            <div className={styles.buttons}>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <span>Latest activities</span>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img src={otherUser} alt="user" />
              <span>Zabec Wilsky</span>
              <p>Changed their avatar picture</p>
            </div>
            <p>1 min ago</p>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img src={otherUser} alt="user" />
              <span>Zabec Wilsky</span>
              <p>Leaved a comment</p>
            </div>
            <p>4 min ago</p>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img src={otherUser} alt="user" />
              <span>Zabec Wilsky</span>
              <p>Liked other profile picture</p>
            </div>
            <p>5 min ago</p>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img src={otherUser} alt="user" />
              <span>Zabec Wilsky</span>
              <p>Start discussion in comments</p>
            </div>
            <p>6 min ago</p>
          </div>
        </div>
        <div className={styles.item}>
          <span>Online friends</span>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img src={otherUser} alt="user" />
              <div className={styles.online} />
              <span>Zabec Wilsky</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img src={otherUser} alt="user" />
              <div className={styles.online} />
              <span>Zabec Wilsky</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img src={otherUser} alt="user" />
              <div className={styles.online} />
              <span>Zabec Wilsky</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img src={otherUser} alt="user" />
              <div className={styles.online} />
              <span>Zabec Wilsky</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <img src={otherUser} alt="user" />
              <div className={styles.online} />
              <span>Zabec Wilsky</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
