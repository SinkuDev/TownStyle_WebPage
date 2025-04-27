import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
        {/* <Navbar/> */}
        <div className="p-6 overflow-y-auto flex-1">
        <Outlet />
        </div>
      </div>
    </div>
  );
}
