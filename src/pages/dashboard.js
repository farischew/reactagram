import { useEffect, useState } from "react";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";
import MenuBar from "../components/menubar";
import CreatePost from "../components/createpost";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = "Reactagram";
  }, []);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-gray-background">
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-md pt-4">
        <MenuBar handleModalToggle={handleModalToggle} />
        <Timeline />
        <Sidebar />
        {showModal && <CreatePost handleModalToggle={handleModalToggle} />}
      </div>
    </div>
  );
}
