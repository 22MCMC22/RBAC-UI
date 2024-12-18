import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import PermissionManagement from "./pages/PermissionManagement";
import "./App.css";

// Styles
const containerStyle = {
  display: "flex", // Flex container for alignment
  flexDirection: "column", // Vertical stacking
  alignItems: "center", // Center items horizontally
  justifyContent: "center", // Center items vertically
  gap: "15px", // Space between items
  width: "1100px", // Fixed container width
  margin: "50px auto", // Center container horizontally
  padding: "20px",
  border: "2px dashed #ccc", // Dashed border for light inline/incline effect
  borderRadius: "10px",
  backgroundColor: "#FFFBF2", // Light background color
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for elevation
};

const stylingHeader = {
  color: "#4B5320", // Light green
  textAlign: "center",
  fontWeight: "bold",
  margin: "5px 0",
  fontStyle: "italic", // Inclined text
};

const appContainerStyle = {
  backgroundColor: "#FAF3DD", // Light grey background
  minHeight: "90vh", // Full viewport height
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px",
};

const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  backgroundColor: "#007BFF",
  color: "white", // Text color
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const NavigationButtons = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <div style={{ marginBottom: "20px" }}>
      <button style={buttonStyle} onClick={() => navigate("/")}>
        User Management
      </button>
      <button style={buttonStyle} onClick={() => navigate("/roles")}>
        Role Management
      </button>
      <button style={buttonStyle} onClick={() => navigate("/permissions")}>
        Permission Management
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div style={appContainerStyle}>
        <header className="app-header">
          <div style={containerStyle}>
          <h2 style={stylingHeader}>Welcome to Parwej's Website</h2>
          <h3 style={stylingHeader}>
            I'm giving you full control; you're free to edit, delete, and design
            anything
          </h3>
          <h1 style={stylingHeader}>Role-Based Access Control (RBAC) System</h1>
          </div>
          {/* Navigation Buttons */}
          <NavigationButtons />
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<UserManagement />} />
            <Route path="/roles" element={<RoleManagement />} />
            <Route path="/permissions" element={<PermissionManagement />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
