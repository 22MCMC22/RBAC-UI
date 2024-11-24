import React, { useState, useEffect } from "react";
import "./../styles/UserForm.css";


export const UserForm = ({ onSave, onCancel, userData }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setRole(userData.role);
      setStatus(userData.status);
    }
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, role, status });
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h3>{userData ? "Edit User" : "Add User"}</h3>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Role:</label>
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default UserForm;
