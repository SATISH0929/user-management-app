import React, { useState, useEffect } from "react";

const UserForm = ({ user, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="addUser">{user ? "Edit User" : "Add User"}</h2>
      <label className="label">Name:</label>
      <input
        className="input"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label className="label">Email:</label>
      <input
        className="input"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label className="label">Department:</label>
      <input
        className="input"
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
      />
      <button className="addUser" type="submit">{user ? "Update" : "Add"} User</button>
      <button  className="cancelUser" type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UserForm;
