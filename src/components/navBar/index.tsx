import styles from "./index.module.scss";
import user from "../../assets/user.svg";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/GiteOutlined";
import ThemeIcon from "@mui/icons-material/Brightness6Outlined";
import AppIcon from "@mui/icons-material/AppRegistrationOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import UserIcon from "@mui/icons-material/AccountBoxOutlined";
import MessageIcon from "@mui/icons-material/EmailOutlined";
import NotificationIcon from "@mui/icons-material/CircleNotificationsOutlined";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>HomePage</span>
        </Link>
        <HomeIcon />
        <ThemeIcon />
        <AppIcon />
        <div className={styles.search}>
          <SearchIcon />
          <input type="text" placeholder="search someone.." />
        </div>
      </div>
      <div className={styles.right}>
        <UserIcon />
        <MessageIcon />
        <NotificationIcon />
        <div className={styles.user}>
          <img src={user} alt="user" />
          <span>James Brune</span>
        </div>
      </div>
    </div>
  );
};
