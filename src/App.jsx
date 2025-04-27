import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import RoomManager from "./pages/RoomManager";
import StudentManager from "./pages/StudentManager";
import SeatingGenerator from "./pages/SeatingGenerator";
import LayoutViewer from "./pages/LayoutViewer";
import UserProfile from "./pages/UserProfile";
import SignupPage from "./pages/Signup";
import HomePage from "./pages/Homepage"; // ✅ already imported

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* ✅ Home page as root */}
        <Route path="/login" element={<LoginPage />} /> {/* ✅ Moved login */}
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="rooms" element={<RoomManager />} />
          <Route path="students" element={<StudentManager />} />
          <Route path="arrangement" element={<SeatingGenerator />} />
          <Route path="layout" element={<LayoutViewer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
