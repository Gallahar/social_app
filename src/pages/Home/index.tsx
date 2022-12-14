import "./index.scss";
import { Stories } from "../../components/Stories";
import { Posts } from "../../components/Posts";
import {CreatePost} from "../../components/CreatePost";

const Home = () => {
  return (
    <div className={"home"}>
      <Stories />
        <CreatePost/>
      <Posts />
    </div>
  );
};

export default Home;
