import { useContext, useState } from "react";
import { AuthenticateContext } from "./App";

function Login() {
  const { login } = useContext(AuthenticateContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="page">
    <div className="card">
      <h2>LOGIN</h2>
      <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <button onClick={() => login(name, email)}>Login</button>
    </div>
    </div>
  );
}
export default Login;
