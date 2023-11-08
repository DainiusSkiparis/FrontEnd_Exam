import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="main-container">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          LOGO
        </Link>
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/singin"} className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/singup"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </div>
      </nav>

      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/singin"} element={<Login />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/singup"} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
