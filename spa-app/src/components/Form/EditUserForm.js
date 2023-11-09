import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import CustomDatePicker from "./DatePicker";

const EditUserForm = ({ userToEdit, onSave }) => {
  const [editedUser, setEditedUser] = useState({ ...userToEdit });

  useEffect(() => {
    setEditedUser({ ...userToEdit });
  }, [userToEdit]);

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/users/${userToEdit._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedUser),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user data.");
      }

      const updatedUser = await response.json();
      onSave(updatedUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSave}>
        <input
          type="text"
          placeholder="FirstName"
          value={editedUser.firstname}
          onChange={(e) =>
            setEditedUser({ ...editedUser, firstname: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="LastName"
          value={editedUser.lastname}
          onChange={(e) =>
            setEditedUser({ ...editedUser, lastname: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="E-mail"
          value={editedUser.email}
          onChange={(e) =>
            setEditedUser({ ...editedUser, email: e.target.value })
          }
        />
        <CustomDatePicker
          selected={editedUser.visit}
          onChange={(date) => setEditedUser({ ...editedUser, visit: date })}
        />
        <Button type="submit" text="Save" design="blue" />
      </form>
    </div>
  );
};

export default EditUserForm;
