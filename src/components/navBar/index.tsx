import "./index.scss";
import blank from "../../assets/user.svg";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/GiteOutlined";
import ThemeIcon from "@mui/icons-material/Brightness6Outlined";
import AppIcon from "@mui/icons-material/AppRegistrationOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import UserIcon from "@mui/icons-material/AccountBoxOutlined";
import MessageIcon from "@mui/icons-material/EmailOutlined";
import NotificationIcon from "@mui/icons-material/CircleNotificationsOutlined";
import React from "react";
import { useAppDispatch } from "../../store";
import { setTheme } from "../../store/theme/slice";
import { TAuthCurrentUser } from "../../store/auth/types";

type TNavBarProps = {
  theme: boolean;
  user: TAuthCurrentUser | null;
};

export const NavBar: React.FC<TNavBarProps> = React.memo(({ theme, user }) => {
  const firstRender = React.useRef(false);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (firstRender.current) {
      const dataToLocal = JSON.stringify(theme);
      localStorage.setItem("theme", dataToLocal);
    }
    firstRender.current = true;
  }, [theme]);

  const onClickTheme = () => {
    dispatch(setTheme(!theme));
  };

  return (
    <div className="navbar">
      <div className={"left"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>HomePage</span>
        </Link>
        <HomeIcon />
        <ThemeIcon className={"themeIcon"} onClick={onClickTheme} />
        <AppIcon />
        <div className={"search"}>
          <SearchIcon />
          <input type="text" placeholder="search someone.." />
        </div>
      </div>
      <div className={"right"}>
        <UserIcon />
        <MessageIcon />
        <NotificationIcon />
        <div className={"user"}>
          <img src={user?.profilePic ? user.profilePic : blank} alt="user" />
          <span>{user ? user.username : "John Doe"}</span>
        </div>
      </div>
    </div>
  );
});
