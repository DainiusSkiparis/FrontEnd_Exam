import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/Form/RegisterForm";

const Register = () => {
  const navigate = useNavigate();

  const onRegistrationSuccess = () => {
    alert("Sign-up was successful!");
    navigate("/signin");
  };

  return (
    <div>
      <h2>Registration</h2>
      <RegisterForm onSuccessfulRegister={onRegistrationSuccess} />
    </div>
  );
};

export default Register;
