import { useContext, useEffect, useState } from "react";
import useUser from "../../hooks/use-user";
import Suggestions from "./suggestions";
import User from "./user";
import { getUserAvatar } from "../../services/firebase";
import FirebaseContext from "../../context/firebase";

export default function Sidebar() {
  const { firebase } = useContext(FirebaseContext);

  const {
    user: { docId, fullName, userId, username, following },
  } = useUser();

  const [avatar, setAvatar] = useState();
  useEffect(() => {
    const getAvatar = async () => {
      const avatarSrc = await getUserAvatar(username);
      setAvatar(avatarSrc);
    };

    if (username) {
      getAvatar();
    }
  }, [username]);

  return (
    <div className="p-4">
      <User
        username={username}
        fullName={fullName}
        avatar={avatar}
        firebase={firebase}
      />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}
