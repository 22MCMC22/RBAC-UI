import React, { useState } from "react";
import UserForm from "./UserForm";
import "./../styles/UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
  ]);
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddUser = () => {
    setEditingUser(null);
    setShowForm(true);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleSaveUser = (newUser) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === editingUser.id ? { ...newUser, id: u.id } : u)));
    } else {
      setUsers([...users, { ...newUser, id: Date.now() }]);
    }
    setShowForm(false);
  };

  const handleCancel = () => setShowForm(false);

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <button onClick={handleAddUser}>Add User</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && (
        <UserForm
          onSave={handleSaveUser}
          onCancel={handleCancel}
          userData={editingUser}
        />
      )}
    </div>
  );
};

export default UserManagement;
