import { Link, useLocation } from "react-router-dom";
import {
  User,
  LayoutGrid,
  Users,
  Settings,
  Eye,
} from "lucide-react"; // Icons

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Profile", path: "/dashboard/userprofile", icon: <User size={15} /> },
    { name: "Room LayOut", path: "/dashboard/rooms", icon: <LayoutGrid size={15} /> },
    { name: "Student Manager", path: "/dashboard/students", icon: <Users size={15} /> },
    { name: "Seating Generator", path: "/dashboard/arrangement", icon: <Settings size={15} /> },
    { name: "Layout Viewer", path: "/dashboard/layout", icon: <Eye size={15} /> },
  ];

  return (
    <div
      className="bg-blue-900 text-white h-screen p-4 w-48 relative"
    >
      {/* Logo / Title */}
      <div className="mb-6 flex justify-center items-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-700 transition ${
              location.pathname === item.path ? "bg-blue-700" : ""
            }`}
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
