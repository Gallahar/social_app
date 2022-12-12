import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { setLogin } from "../../store/auth/slice";

const Login = () => {
  const dispatch = useAppDispatch();
  const onClickLogin = () => {
    dispatch(
      setLogin({
        id: "1",
        userName: "David Kushnir",
        imgUrl:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        profilePicture:
          "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      })
    );
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: "1",
        userName: "David Kushnir",
        imgUrl:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        profilePicture:
          "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      })
    );
  };
  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Hello there!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa
            debitis illum in laborum, libero natus odio perferendis ?
          </p>
          <span>Do you want create a account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className={styles.right}>
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="UserName" />
            <input type="password" placeholder="Password" />
            <button onClick={onClickLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
