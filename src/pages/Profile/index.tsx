import "./index.scss";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/auth/selectors";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Posts } from "../../components/Posts";
const Profile = () => {
  const { user } = useSelector(selectAuth);
  return (
    <div className={"profile"}>
      <div className={"imgContainer"}>
        <img
          src={user ? user.profilePicture : ""}
          alt={"profilePicture"}
          className={"background"}
        />
        <img
          src={user ? user.imgUrl : ""}
          alt={"userPicture"}
          className={"userImg"}
        />
      </div>
      <div className={"profileContainer"}>
        <div className={"socialsContainer"}>
          <div className={"left"}>
            <a href={"https://vk.com"} target={"_blank"}>
              <FacebookTwoToneIcon fontSize={"large"} />
            </a>
            <a>
              <LinkedInIcon fontSize={"large"} />
            </a>
            <a>
              <InstagramIcon fontSize={"large"} />
            </a>
            <a>
              <PinterestIcon fontSize={"large"} />
            </a>
            <a>
              <TwitterIcon fontSize={"large"} />
            </a>
          </div>
          <div className={"center"}>
            <span>Jane Doe</span>
            <div className={"infoContainer"}>
              <div className={"item"}>
                <PlaceIcon fontSize={"small"} />
                <span>IL</span>
              </div>
              <div className={"item"}>
                <LanguageIcon fontSize={"small"} />
                <span>gala</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className={"right"}>
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
