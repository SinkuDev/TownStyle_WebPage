import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignupPage() {
  // 🔁 Use 'name' instead of 'username' to match backend
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // ✅ Keys must match backend DTO: name, email, password
      const res = await axios.post("http://localhost:8080/api/auth/signup", {
        name,
        email,
        password,
      });
      alert(res.data); // "Signup successful" ya "User already exists"
    } catch (err) {
      console.error("Full error :", err);
      const errorMessage = err.response?.data?.message || "Signup failed";
      alert(errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-xl p-6 rounded-xl w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create an Account</h2>

        {/* ✅ Use 'name' instead of 'username' */}
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-3 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email id"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Sign Up
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
