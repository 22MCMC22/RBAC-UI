// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import UserManagement from "./pages/UserManagement";
// import RoleManagement from "./pages/RoleManagement";
// import PermissionManagement from "./pages/PermissionManagement";
// import "./App.css";

// // Inline styling objects
// //Styling part
// const stylingHeader = {
//     color: "#4B5320", 
//     textAlign: "center",
//     fontWeight: "bold",
//     margin: "10px 0",
//   };

//   const appContainerStyle = {
//     backgroundColor: "#FAF3DD", // Light grey background
//     minHeight: "90vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   };

// const App = () => {
//   return (
//     <Router>
//       <div style={appContainerStyle}>
//         <header className="app-header">
//           <h2 style={stylingHeader}>Welcome to Parwej's Website</h2>
//           <h3 style={stylingHeader}>
//             I'm giving you full controls, you're free to edit, delete and design
//             anything
//           </h3>
//           <h1 style={stylingHeader}>Role-Based Access Control (RBAC) System</h1>
//           <nav>
//             <ul className="nav-links">
//               <li>
//                 <Link to="/">User Management</Link>
//               </li>
//               <li>
//                 <Link to="/roles">Role Management</Link>
//               </li>
//               <li>
//                 <Link to="/permissions">Permission Management</Link>
//               </li>
//             </ul>
//           </nav>
//         </header>
//         <main className="app-main">
//           <Routes>
//             <Route path="/" element={<UserManagement />} />
//             <Route path="/roles" element={<RoleManagement />} />
//             <Route path="/permissions" element={<PermissionManagement />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import PermissionManagement from "./pages/PermissionManagement";
import "./App.css";

// Styling
const stylingHeader = {
  color: "#4B5320",
  textAlign: "center",
  fontWeight: "bold",
  margin: "5px 0",
  padding: "5px",
};

const appContainerStyle = {
  backgroundColor: "#FAF3DD", // Light grey background
  minHeight: "90vh",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px",
};

const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  backgroundColor: "#007BFF",
  color: "white",
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
          <h2 style={stylingHeader}>Welcome to Parwej's Website</h2>
          <h3 style={stylingHeader}>
            I'm giving you full control; you're free to edit, delete, and design
            anything
          </h3>
          <h1 style={stylingHeader}>Role-Based Access Control (RBAC) System</h1>

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
