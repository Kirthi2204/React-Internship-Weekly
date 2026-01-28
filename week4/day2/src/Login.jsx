import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; 

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(user, pass)) navigate("/");
    else alert("Invalid credentials");
  };

  return (
    <div className="page">
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setUser(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPass(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
