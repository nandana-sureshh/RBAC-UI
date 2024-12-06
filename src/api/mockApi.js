const mockUsers = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "Editor" },
  ];
  
  const mockRoles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Editor" },
    { id: 3, name: "Viewer" },
  ];
  
  const mockApi = {
    getUsers: () => mockUsers,
    addUser: (user) => mockUsers.push(user),
    deleteUser: (id) => {
      const index = mockUsers.findIndex((user) => user.id === id);
      if (index !== -1) mockUsers.splice(index, 1);
    },
    getRoles: () => mockRoles,
    addRole: (role) => mockRoles.push(role),
  };
  
  export default mockApi;