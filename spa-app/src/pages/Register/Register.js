import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:5000/admins/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      console.log(userData);

      if (response.ok) {
        console.log("Registracija pavyko!");
        navigate("/singin");
      } else {
        console.error("Registracija nepavyko");
      }
    } catch (error) {
      console.error("Klaida atliekant registraciją:", error);
    }
  };

  return (
    <div>
      <h2>Registracija</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">El. paštas (prisijungimas vyks su juo)</label>
          <input
            type="email"
            id="email"
            placeholder="Jūsų el. paštas"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">Vardas</label>
          <input
            type="text"
            id="firstName"
            placeholder="Jūsų vardas"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Pavardė</label>
          <input
            type="text"
            id="lastName"
            placeholder="Jūsų pavardė"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Slaptažodis</label>
          <input
            type="password"
            id="password"
            placeholder="Jūsų slaptažodis"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" text="Registruotis" design="green"></Button>
      </form>
    </div>
  );
};

export default Register;
