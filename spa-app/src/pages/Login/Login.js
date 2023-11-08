import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:5000/admins/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Prisijungimas pavyko!");
        navigate("/home");
      } else {
        console.error("Prisijungimas nepavyko");
        alert("Prisijungimas nepavyko, bandykite dar karta...");
      }
    } catch (error) {
      console.error("Klaida atliekant prisijungimą:", error);
    }
  };

  return (
    <div>
      <h2>Prisijungti</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">El. paštas</label>
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
        <Button type="submit" text="Prisijungti" design="green"></Button>
      </form>
      <p>
        Neturite paskyros? <Link to="/singup">Registruotis čia</Link>
      </p>
    </div>
  );
};

export default Login;
