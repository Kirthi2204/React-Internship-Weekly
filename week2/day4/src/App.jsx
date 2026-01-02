import React, { useEffect, useState } from "react";
import "./App.css";

function UsersData() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("loading"); 
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setStatus("loading");
    setError("");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setStatus("success");
      })
      .catch((err) => {
        setError(err.message);
        setStatus("error");
      });
  };

  return (
    <div className="page">
      <div className="card">
        <h2>User Directory</h2>
        {status === "loading" && <p>Loading users data...</p>}
        {status === "error" && (
          <>
            <p className="error">{error}</p>
            <button onClick={fetchUsers}>Retry</button>
          </>
        )}

        {status === "success" && (
          <>
            <p>Total Users: {users.length}</p>
            <ul>
              {users.map((u) => (
                <li key={u.id}>
                  <strong>{u.name}</strong>
                  <span>{u.email}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default UsersData;
