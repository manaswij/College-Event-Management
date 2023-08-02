import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./register.css";

export default function Register() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", formData);
      res.data && history.push("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">REGISTER</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
      {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
    </div>
  );
}
