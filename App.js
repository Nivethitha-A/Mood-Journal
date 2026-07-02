import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddEntry from "./pages/AddEntry";
import "./styles/App.css";
import "./animations.css";
import MusicToggle from "./components/MusicToggle";
import Profile from "./pages/Profile";
import EditEntry from "./pages/EditEntry";


// 🔒 Protected Route
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <div className="animated-bg">

        {/* Floating background shapes */}
        <div className="floating-shapes">
          <span></span><span></span><span></span><span></span><span></span>
        </div>

        {/* Top Navbar */}
        <Navbar />

        {/* Page container */}
        <div className="app-container fade-in">
          <Routes>

            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Private Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/add-entry"
              element={
                <ProtectedRoute>
                  <AddEntry />
                </ProtectedRoute>
              }
            />
            <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
<Route path="/edit-entry/:id" element={<EditEntry />} />

          </Routes>
        </div>

        {/* 🎵 Background Music Toggle */}
        <MusicToggle />

      </div>
    </Router>
  );
}

export default App;
