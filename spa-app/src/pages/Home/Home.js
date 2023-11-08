import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("http://localhost:5000/users");
        if (!response.ok) {
          throw new Error("Nepavyko gauti vartotojų duomenų.");
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
    console.log(userId);
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Nepavyko ištrinti vartotojo.");
      }
      // Atnaujinti vartotojų sąrašą be ištrinto vartotojo
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Vartotojų sąrašas</h1>
      <table>
        <thead>
          <tr>
            <th>Vardas</th>
            <th>Pavardė</th>
            <th>El. paštas</th>
            <th>Laikas</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.visit}</td>
              <td>
                <Button text="Edit" design="blue"></Button>
              </td>
              <td>
                <Button
                  text="Delete"
                  design="red"
                  onClick={() => handleDelete(user._id)}></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
