import React, { useState } from "react";
import "./../styles/RoleManagement.css";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  ]);
  const [editingRole, setEditingRole] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddRole = () => {
    setEditingRole(null);
    setShowForm(true);
  };

  const handleEditRole = (role) => {
    setEditingRole(role);
    setShowForm(true);
  };

  const handleSaveRole = (newRole) => {
    if (editingRole) {
      setRoles(
        roles.map((role) =>
          role.id === editingRole.id ? { ...newRole, id: role.id } : role
        )
      );
    } else {
      setRoles([...roles, { ...newRole, id: Date.now() }]);
    }
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="role-management">
      <h2>Role Management</h2>
      <button onClick={handleAddRole}>Add Role</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button onClick={() => handleEditRole(role)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <RoleForm
          onSave={handleSaveRole}
          onCancel={handleCancel}
          roleData={editingRole}
        />
      )}
    </div>
  );
};

const RoleForm = ({ onSave, onCancel, roleData }) => {
  const [name, setName] = useState(roleData ? roleData.name : "");
  const [permissions, setPermissions] = useState(
    roleData ? roleData.permissions : []
  );

  const handlePermissionChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setPermissions([...permissions, value]);
    } else {
      setPermissions(permissions.filter((perm) => perm !== value));
    }
  };

  const handleSubmit = () => {
    onSave({ name, permissions });
  };

  return (
    <div className="role-form">
      <h3>{roleData ? "Edit Role" : "Add Role"}</h3>
      <div>
        <label>Role Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Permissions:</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="Read"
              checked={permissions.includes("Read")}
              onChange={handlePermissionChange}
            />
            Read
          </label>
          <label>
            <input
              type="checkbox"
              value="Write"
              checked={permissions.includes("Write")}
              onChange={handlePermissionChange}
            />
            Write
          </label>
          <label>
            <input
              type="checkbox"
              value="Delete"
              checked={permissions.includes("Delete")}
              onChange={handlePermissionChange}
            />
            Delete
          </label>
        </div>
      </div>
      <div className="form-actions">
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default RoleManagement;
