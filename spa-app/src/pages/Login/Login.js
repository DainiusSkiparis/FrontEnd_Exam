import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/Form/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  const handleSuccessfulLogin = () => {
    navigate("/home");
  };

  return (
    <div>
      <h2>Sign-in</h2>
      <LoginForm onSuccessfulLogin={handleSuccessfulLogin} />
      <p>
        <Link to="/signup">Sign-up here</Link>
      </p>
    </div>
  );
};

export default Login;
