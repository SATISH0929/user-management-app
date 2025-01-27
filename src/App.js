import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./Components/UserList";
import UserForm from "./Components/UserForm";

import "./App.css"

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); 
  const [showForm, setShowForm] = useState(false); 
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch(() => setError("Failed to fetch users."));
  }, []);

  const addUser = async (newUser) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser
      );
      if (response.status === 201) {
        setUsers((prevUsers) => [...prevUsers, { ...newUser, id: Date.now() }]);
        alert("User added successfully!");
      }
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user.");
    }
  };

  const editUser = async (updatedUser) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${updatedUser.id}`,
        updatedUser
      );
      if (response.status === 200) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
          )
        );
        alert("User updated successfully!");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (response.status === 200) {
        
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        alert("User deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user.");
    }
  };

  return (
    <div className="app">
      <h1 className="heading">User Management App</h1>
      {error && <p className="error">{error}</p>}
      {showForm ? (
        <UserForm
          user={editingUser}
          onSubmit={editingUser ? editUser : addUser}
          onCancel={() => {
            setEditingUser(null);
            setShowForm(false);
          }}
        />
      ) : (
        <>
          <button className="addUser" onClick={() => setShowForm(true)}>Add User</button>
          <UserList
            users={users}
            onEdit={(user) => {
              setEditingUser(user);
              setShowForm(true);
            }}
            onDelete={deleteUser}
          />
        </>
      )}
    </div>
  );
};

export default App;
