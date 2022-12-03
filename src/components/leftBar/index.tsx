import styles from "./index.module.scss";
import memories from "../../assets/5.png";
import friends from "../../assets/friend.png";
import groups from "../../assets/2.png";
import marketplace from "../../assets/3.png";
import watch from "../../assets/4.png";
import user from "../../assets/user.svg";
import events from "../../assets/6.png";
import games from "../../assets/7.png";
import gallery from "../../assets/8.png";
import videos from "../../assets/9.png";
import messages from "../../assets/10.png";
import fundraiser from "../../assets/13.png";
import tutorials from "../../assets/11.png";
import courses from "../../assets/12.png";
export const LeftBar = () => {
  return (
    <div className={styles.leftBar}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={styles.user}>
            <img src={user} alt="user" />
            <span>James Brune</span>
          </div>
          <div className={styles.item}>
            <img src={friends} alt="friends" />
            <span>Friends</span>
          </div>
          <div className={styles.item}>
            <img src={groups} alt="groups" />
            <span>Groups</span>
          </div>
          <div className={styles.item}>
            <img src={marketplace} alt="marketplace" />
            <span>Marketplace</span>
          </div>
          <div className={styles.item}>
            <img src={watch} alt="watch" />
            <span>Watch</span>
          </div>
          <div className={styles.item}>
            <img src={memories} alt="memories" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <h1>Your shortcuts</h1>
        <div className={styles.menu}>
          <div className={styles.item}>
            <img src={events} alt="events" />
            <span>Events</span>
          </div>
          <div className={styles.item}>
            <img src={games} alt="games" />
            <span>Games</span>
          </div>
          <div className={styles.item}>
            <img src={gallery} alt="gallery" />
            <span>Gallery</span>
          </div>
          <div className={styles.item}>
            <img src={videos} alt="videos" />
            <span>Videos</span>
          </div>
          <div className={styles.item}>
            <img src={messages} alt="messages" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <h1>Others</h1>
        <div className={styles.menu}>
          <div className={styles.item}>
            <img src={fundraiser} alt="fundraiser" />
            <span>Fundraiser</span>
          </div>
          <div className={styles.item}>
            <img src={tutorials} alt="tutorials" />
            <span>Tutorials</span>
          </div>
          <div className={styles.item}>
            <img src={courses} alt="courses" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};
