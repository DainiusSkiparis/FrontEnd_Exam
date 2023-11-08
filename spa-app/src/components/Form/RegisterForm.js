import React, { useState } from "react";
import Button from "../Button/Button";

const RegisterForm = ({ onSuccessfulRegister }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

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

      if (response.ok) {
        console.log("Sign-up was successful!");
        onSuccessfulRegister();
      } else {
        console.error("Sign-up failed");
        alert("Sign-up failed, try again.");
      }
    } catch (error) {
      console.error("Error while sign-up:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          id="firstName"
          placeholder="Your firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          placeholder="Your lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" text="Submit" design="green" />
    </form>
  );
};

export default RegisterForm;
