import React, { useState } from "react";
import mockApi from "../api/mockApi";

function RoleManagement() {
  const [roles, setRoles] = useState(mockApi.getRoles());

  const addRole = (role) => {
    mockApi.addRole(role);
    setRoles(mockApi.getRoles());
  };

  return (
    <div>
      <h2>Role Management</h2>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>{role.name}</li>
        ))}
      </ul>
      <button onClick={() => addRole({ id: Date.now(), name: "New Role" })}>Add Role</button>
    </div>
  );
}

export default RoleManagement;