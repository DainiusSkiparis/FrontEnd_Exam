import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./components/Header/Header";

function App() {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <div className="main-container">
      <Header onLogout={handleLogout} />{" "}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
