import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>RBAC Dashboard</h1>
      <div className="links">
        <Link to="/users">Users</Link>
        <Link to="/roles">Roles</Link>
        <Link to="/permissions">Permissions</Link>
      </div>
    </nav>
  );
}

export default Navbar;
