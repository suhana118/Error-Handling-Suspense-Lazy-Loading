import { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await res.json();
        setUsers(data);
      } catch (error) {
        setErrorMsg(error.message);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="container">
      <h1>📊 Dashboard</h1>

      {errorMsg && (
        <div className="card">
            <h3 style={{ color: "red" }}>❌Error</h3>
          <p>{errorMsg}</p>
        </div>
      )}

      <div className="card">
            <h3>Users List:</h3>
            {users.map((user) => (
                <p key={user.id}>✅{user.name}</p>
            ))}
      </div>
    </div>
  );
};

export default Dashboard;