import React, { useContext, useState } from "react";
import { DnDContext } from "./DnDContext";

const Sidebar = ({ addUser }) => {
  const { hobbies, addHobbyToNode } = useContext(DnDContext);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [search, setSearch] = useState("");

  const handleAddUser = () => {
    if (userName.trim() === "" || userAge.trim() === "" || isNaN(userAge)) {
      return alert("Please enter a valid name and age.");
    }
    addUser(userName, parseInt(userAge)); // Add the user node with age
    setUserName(""); // Clear the input
    setUserAge(""); // Clear the input
  };

  const filteredHobbies = hobbies.filter((hobby) =>
    hobby.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside
      style={{
        padding: 10,
        width: 200,
        background: "#f0f0f0",
        borderRight: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h3>Hobbies</h3>
      <input
        type="text"
        placeholder="Search hobbies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 10,
          borderRadius: 5,
          border: "1px solid #ddd",
        }}
      />
      <div
        style={{
          overflowY: "auto",
          flex: 1,
          marginBottom: 10,
          paddingRight: 5,
        }}
      >
        {filteredHobbies.map((hobby) => (
          <div
            key={hobby}
            onDragStart={(event) => event.dataTransfer.setData("hobby", hobby)}
            draggable
            style={{
              padding: 10,
              marginBottom: 5,
              background: "#007bff",
              color: "#fff",
              cursor: "grab",
              textAlign: "center",
              borderRadius: 5,
            }}
          >
            {hobby}
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid #ddd", paddingTop: 10 }}>
        <h3>Add User</h3>
        <input
          type="text"
          placeholder="Enter user name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{
            width: "100%",
            padding: 8,
            marginBottom: 10,
            borderRadius: 5,
            border: "1px solid #ddd",
          }}
        />
        <input
          type="text"
          placeholder="Enter age"
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
          style={{
            width: "100%",
            padding: 8,
            marginBottom: 10,
            borderRadius: 5,
            border: "1px solid #ddd",
          }}
        />
        <button
          onClick={handleAddUser}
          style={{
            width: "100%",
            padding: 10,
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Add User
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
