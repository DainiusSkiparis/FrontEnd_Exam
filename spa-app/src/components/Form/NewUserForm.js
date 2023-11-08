import React, { useState } from "react";
import Button from "../Button/Button";
import CustomDatePicker from "./DatePicker";

const NewUserForm = ({ setUsers }) => {
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    visit: null,
  });

  const handleCreateUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) {
        throw new Error("Failed to create new visit.");
      }
      const createdUser = await response.json();
      setUsers((prevUsers) => [...prevUsers, createdUser]);
      setNewUser({
        firstname: "",
        lastname: "",
        email: "",
        visit: null,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create new visit</h2>
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          placeholder="FistName"
          value={newUser.firstname}
          onChange={(e) =>
            setNewUser({ ...newUser, firstname: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="LastName"
          value={newUser.lastname}
          onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}
        />
        <input
          type="text"
          placeholder="E-mail"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <CustomDatePicker
          selected={newUser.visit}
          onChange={(date) => setNewUser({ ...newUser, visit: date })}
        />
        <Button type="submit" text="Submit" design="green" />
      </form>
    </div>
  );
};

export default NewUserForm;
