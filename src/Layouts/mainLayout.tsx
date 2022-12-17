import { NavBar } from "../components/navBar";
import { RightBar } from "../components/rightBar";
import { LeftBar } from "../components/leftBar";
import { Outlet } from "react-router-dom";
import "../theme.scss";
import { useSelector } from "react-redux";
import { selectTheme } from "../store/theme/selectors";
import { selectCurrentUser } from "../store/auth/selectors";
export const MainLayout = () => {
  const { theme } = useSelector(selectTheme);
  const user = useSelector(selectCurrentUser);

  return (
    <div className={theme ? "dark" : ""}>
      <NavBar theme={theme} user={user ? user : null} />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};
