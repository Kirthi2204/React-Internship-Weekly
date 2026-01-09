import { useContext } from "react";
import { AuthenticateContext } from "./App";

function Logout() {
  const { auth, logout } = useContext(AuthenticateContext);
  return (
    <div className="page">
    <div className="card">
      <h2>Welcome {auth.user.name}</h2>
      <p>Email: {auth.user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
    </div>
  );
}
export default Logout;
