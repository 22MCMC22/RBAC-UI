import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the RBAC System</h1>
      <p>Manage users, roles, and permissions efficiently.</p>
      <Link to="/login">
        <button style={{ margin: "10px", padding: "10px 20px" }}>Login</button>
      </Link>
      <Link to="/dashboard">
        <button style={{ margin: "10px", padding: "10px 20px" }}>Dashboard</button>
      </Link>
    </div>
  );
}

export default HomePage;
