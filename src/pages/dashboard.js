import { useEffect } from "react";
import Header from "../components/header";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";
import MenuBar from "../components/menubar";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Reactagram";
  }, []);

  return (
    <div className="bg-gray-background">
      {/* <Header /> */}
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg pt-4">
        <MenuBar />
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}
