import React, { useState } from "react";
import mockApi from "../api/mockApi";

function UserManagement() {
  const [users, setUsers] = useState(mockApi.getUsers());

  const addUser = (user) => {
    mockApi.addUser(user);
    setUsers(mockApi.getUsers());
  };

  const deleteUser = (id) => {
    mockApi.deleteUser(id);
    setUsers(mockApi.getUsers());
  };

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addUser({ id: Date.now(), name: "New User", role: "Viewer" })}>
        Add User
      </button>
    </div>
  );
}

export default UserManagement;
