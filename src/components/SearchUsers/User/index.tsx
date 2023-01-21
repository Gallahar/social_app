import styles from "./index.module.scss";
import { TUser } from "../../../store/api/types";
import Blank from "../../../assets/user.svg";
import { Link } from "react-router-dom";
import Site from "@mui/icons-material/LanguageOutlined";
import Location from "@mui/icons-material/PublicOutlined";
type TUserProps = {
  user: TUser;
};

export const User = ({ user }: TUserProps) => {
  return (
    <div className={styles.user}>
      <Link to={`profile/${user.id}`}>
        <img
          src={user.profilePic ? "/upload/" + user.profilePic : Blank}
          alt={"profile"}
        />
      </Link>
      <span>{user.name}</span>
      <span>
        <Location />
        {user.location}
      </span>
      <span>
        <Site />
        {user.website}
      </span>
    </div>
  );
};
