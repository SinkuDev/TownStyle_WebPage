import { useState } from "react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const user = {
    name: "Admin User",
    avatar: "https://i.pravatar.cc/40?img=3", // placeholder image
  };

  return (
    <div className="flex justify-end items-center p-4 bg-white shadow mb-4 relative">
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 focus:outline-none"
        >
          <img
            src={user.avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full border"
          />
          <span className="font-medium">{user.name}</span>
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded border z-10">
            <ul className="text-sm">
              <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                View Profile
              </li>
              <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                Settings
              </li>
              <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-red-600">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
