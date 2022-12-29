import React from "react";
import "./index.scss";
import { upload } from "../../utils/upload";
import { dataApi } from "../../store/api";
import { TUser } from "../../store/api/types";

type UpdateProps = {
  setUpdate: (arg: boolean) => void;
  user: TUser;
};

export const Update: React.FC<UpdateProps> = ({ user, setUpdate }) => {
  const [updateUser] = dataApi.useUpdateUserMutation();
  const [profile, setProfile] = React.useState<null | File>(null);
  const [background, setBackground] = React.useState<null | File>(null);
  const [input, setInput] = React.useState({
    name: "",
    location: "",
    website: "",
  });
  const onClickSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let backgroundPic: null | string = user.backgroundPic;
    let profilePic: null | string = user.profilePic;
    if (background) {
      backgroundPic = await upload(background);
    }
    if (profile) {
      profilePic = await upload(profile);
    }
    await updateUser({
      backgroundPic: backgroundPic,
      profilePic: profilePic,
      input,
    });
    setInput({
      name: "",
      location: "",
      website: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={"update"}>
      <button onClick={() => setUpdate(false)}>close</button>
      <div className={"form"}>
        <form>
          <input type={"file"} />
          <input type={"file"} />
          <input type={"text"} name="name" onChange={handleChange} />
          <input type={"text"} name="location" onChange={handleChange} />
          <input type={"text"} name="website" onChange={handleChange} />
        </form>
        <button onClick={onClickSubmit}>Submit</button>
      </div>
    </div>
  );
};
