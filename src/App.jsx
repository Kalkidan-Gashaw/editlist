import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Abebe", age: 25 },
    { id: 2, name: "Kebede", age: 30 },
    { id: 3, name: "Tomas", age: 35 },
  ]);

  const [editingId, setEditingId] = useState(null);

  const handleNameChange = (id, newName) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, name: newName } : user
      )
    );
  };

  const handleAgeChange = (id, newAge) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, age: newAge } : user
      )
    );
  };

  return (
    <div>
      <h1>User List</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            {editingId === user.id ? (
              <>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleNameChange(user.id, e.target.value)}
                />
                <input
                  type="number"
                  value={user.age}
                  onChange={(e) =>
                    handleAgeChange(user.id, parseInt(e.target.value, 10))
                  }
                />
                <button className='btns'onClick={() => setEditingId(null)}>Save</button>
              </>
            ) : (
              <>
                Name: {user.name} , Age: {user.age}
                <button className='btn' onClick={() => setEditingId(user.id)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
