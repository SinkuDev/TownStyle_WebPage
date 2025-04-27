import React from "react";
import { PencilLine } from "lucide-react"; // Optional: if using Lucide icons



const UserProfile = () => {
  const user = {
    name: "Rishi singhi",
    email: "alex.johnson@email.com",
    role: "Developer",
    bio: "Passionate about creating beautiful user interfaces and smooth user experiences. Love to design, draw, and drink coffee.",
    // profilePic: "https://i.pravatar.cc/200?img=5",
  };

  const handleEditClick = () => {
    console.log("Edit button clicked");
    // You can later open a modal or toggle a form
  };


  

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10 relative">
      {/* Edit Button */}
      <div className="absolute bottom-2 right-9">
        <button
          onClick={handleEditClick}
          className="flex items-center gap-2 text-sm px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
        >
          <PencilLine size={16} />
          Edit Profile
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-4">
        {/* Left: User Info */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>

          <div>
            <label className="block text-sm text-gray-600 font-medium">Email:</label>
            <p className="text-gray-700">{user.email}</p>
          </div>

          <div>
            <label className="block text-sm text-gray-600 font-medium">Bio:</label>
            <p className="text-gray-700">{user.bio}</p>
          </div>
        </div>

        {/* Right: Profile Picture */}
        <div className="flex justify-center md:justify-end ">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-purple-500 shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
