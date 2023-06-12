import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserByUsername } from "../services/firebase";
import UserProfile from "../components/profile";
import * as ROUTES from "../constants/routes";
import MenuBar from "../components/menubar";

export default function Profile() {
  const [showModal, setShowModal] = useState(false);
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    async function checkUserExists() {
      const [user] = await getUserByUsername(username);
      const goToHomePage = () => navigate(ROUTES.NOT_FOUND);

      console.log(user);

      if (user?.userId) {
        setUser(user);
      } else {
        goToHomePage();
      }
    }

    checkUserExists();
  }, [navigate, username]);

  return user?.username ? (
    <div className="bg-gray-background">
      {/* <Header /> */}
      <div className="mx-auto max-w-screen-lg">
        <MenuBar handleModalToggle={handleModalToggle} />
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
}
