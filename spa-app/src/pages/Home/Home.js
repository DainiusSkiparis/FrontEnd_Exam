import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import NewUserForm from "../../components/Form/NewUserForm";
import EditUserForm from "../../components/Form/EditUserForm";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("http://localhost:5000/users");
        if (!response.ok) {
          throw new Error("Failed to get visit data.");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw Error("Failed to delete visit.");
      }
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSaveEditedUser = async (editedUser) => {
    try {
      const response = await fetch(
        `http://localhost:5000/users/${editedUser._id}`,
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
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === editedUser._id ? editedUser : user
        )
      );
      setEditingUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="table-div">
      {editingUser ? (
        <EditUserForm userToEdit={editingUser} onSave={handleSaveEditedUser} />
      ) : (
        <NewUserForm setUsers={setUsers} />
      )}
      <h1>All visitors</h1>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>E-mail</th>
            <th>Visit time</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>
                {new Date(user.visit).toLocaleString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td>
                <Button
                  text="Edit"
                  design="blue"
                  onClick={() => handleEdit(user)}
                />
              </td>
              <td>
                <Button
                  text="Delete"
                  design="red"
                  onClick={() => handleDelete(user._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
