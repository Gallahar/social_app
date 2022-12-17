import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

const Register = () => {
  const [error, setError] = React.useState<null | string>(null);
  const [success, setSuccess] = React.useState(false);
  const [input, setInput] = React.useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRegister = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (input.password.length < 5) {
      setError("Password is too short!");
      setSuccess(false);
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8900/server/auth/register",
        input
      );
      setError(data);
      setSuccess(true);
    } catch (error: any) {
      setError(error.response.data);
      setSuccess(false);
      console.error(error);
    }
  };

  return (
    <div className={styles.register}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="UserName"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            {error ? (
              <div style={success ? { color: "green" } : { color: "red" }}>
                {error}
              </div>
            ) : (
              ""
            )}
            <button onClick={handleRegister}>Register</button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>Greetings!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa
            debitis illum in laborum, libero natus odio perferendis ?
          </p>
          <span>Do you have an account?</span>
          <Link to="/Login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
