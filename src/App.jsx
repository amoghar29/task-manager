import Login from "./pages/Login";
import ProfilePage from "./pages/profile";
import Dashboard from "./pages/dashboard";
import { Routes, Route } from "react-router-dom";
//import { useState } from "react";
import "./App.css";

export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile/:userName" element={<ProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
    </>
  );
}
