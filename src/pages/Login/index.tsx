import React from "react";
import styles from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { setLogin } from "../../store/auth/slice";
import axios, { AxiosError } from "axios";
import { TAuthCurrentUser, TInputLogin } from "../../store/auth/types";

const Login = () => {
  const [error, setError] = React.useState<null | string>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [input, setInput] = React.useState<TInputLogin>({
    username: "",
    password: "",
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const onClickLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const data = await axios.post<TAuthCurrentUser>(
        "http://localhost:8900/server/auth/login",
        input
      );
      console.log(data);
      dispatch(setLogin(data.data));
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error?.response?.data);
      } else {
        alert(
          "something went wrong, try refresh the page, or check the credentials!"
        );
        console.error(error);
      }
    }
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
            <input
              type="text"
              placeholder="UserName"
              name="username"
              onChange={handleInput}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
            {error ? <div style={{ color: "red" }}>{error}</div> : ""}
            <button onClick={onClickLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
