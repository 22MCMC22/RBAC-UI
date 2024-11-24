import React, { useState } from "react";
import "./../styles/PermissionManagement.css";

export const PermissionManagement = () => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: "Read", description: "Allows reading access" },
  ]);
  const [editingPermission, setEditingPermission] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddPermission = () => {
    setEditingPermission(null);
    setShowForm(true);
  };

  const handleEditPermission = (permission) => {
    setEditingPermission(permission);
    setShowForm(true);
  };

  const handleSavePermission = (newPermission) => {
    if (editingPermission) {
      setPermissions(
        permissions.map((permission) =>
          permission.id === editingPermission.id
            ? { ...newPermission, id: permission.id }
            : permission
        )
      );
    } else {
      setPermissions([
        ...permissions,
        { ...newPermission, id: Date.now() },
      ]);
    }
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="permission-management">
      <h2>Permission Management</h2>
      <button onClick={handleAddPermission}>Add Permission</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td>{permission.name}</td>
              <td>{permission.description}</td>
              <td>
                <button onClick={() => handleEditPermission(permission)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <PermissionForm
          onSave={handleSavePermission}
          onCancel={handleCancel}
          permissionData={editingPermission}
        />
      )}
    </div>
  );
};

const PermissionForm = ({ onSave, onCancel, permissionData }) => {
  const [name, setName] = useState(permissionData ? permissionData.name : "");
  const [description, setDescription] = useState(
    permissionData ? permissionData.description : ""
  );

  const handleSubmit = () => {
    onSave({ name, description });
  };

  return (
    <div className="permission-form">
      <h3>{permissionData ? "Edit Permission" : "Add Permission"}</h3>
      <div>
        <label>Permission Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="form-actions">
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default PermissionManagement;
