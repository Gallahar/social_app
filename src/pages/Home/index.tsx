import "./index.scss";
import { Stories } from "../../components/Stories";
import { Posts } from "../../components/Posts";

const Home = () => {
  return (
    <div className={"home"}>
      <Stories />
      <Posts />
    </div>
  );
};

export default Home;
