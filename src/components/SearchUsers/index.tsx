import "./index.scss";
import axios from "axios";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { dataApi } from "../../store/api";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/auth/selectors";
import { User } from "./User";
import { TUser } from "../../store/api/types";

type TSearchUsers = {
  setPopup: (arg: boolean) => void;
};

export const SearchUsers = ({ setPopup }: TSearchUsers) => {
  const currentUser = useSelector(selectCurrentUser);
  const [usersByName, setUsersByName] = React.useState<null | TUser[]>(null);
  const [input, setInput] = React.useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const { data, error, isLoading } = dataApi.useGetSearchUserQuery(
    currentUser ? currentUser.id : 1
  );

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8900/server/users/name/${input}`,
        { withCredentials: true }
      );
      setUsersByName(data);
      console.log(data);
    } catch (e) {
      console.log(e);
      alert("User not found");
    }
  };

  return (
    <div className={"wrapper"}>
      <div className={"searchUsers"}>
        <div className={"close"}>
          <button onClick={() => setPopup(false)}>close</button>
        </div>
        <div className={"search"}>
          <p>Looking for new friends?</p>
          <div tabIndex={0} className={"input"}>
            <input
              value={input}
              onChange={handleInput}
              type="text"
              placeholder="search someone.."
            />
            {input && (
              <ClearIcon
                onClick={() => setInput("")}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: 2,
                  top: 2,
                  width: 20,
                  height: 20,
                }}
              />
            )}
          </div>
          <button onClick={handleSearch}>Search user</button>
        </div>
        <div className={"container"}>
          {error ? <h1>Error occurred!</h1> : ""}
          {isLoading ? (
            <h1>Loading...</h1>
          ) : usersByName ? (
            usersByName.map((user: TUser) => <User key={user.id} user={user} />)
          ) : (
            data &&
            data.map((user: TUser) => <User key={user.id} user={user} />)
          )}
        </div>
      </div>
    </div>
  );
};
