import Login from "./pages/Login";
import ProfilePage from "./pages/profile";
import Dashboard from "./pages/dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./authContext/authContext";
import "./App.css";

export default function App() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/profile/"
          element={isLoggedIn ? <ProfilePage /> : <Navigate to="/" />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}
