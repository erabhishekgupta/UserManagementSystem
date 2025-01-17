import React, { createContext, useState } from "react";

export const DnDContext = createContext();

const DnDProvider = ({ children }) => {
  const [nodes, setNodes] = useState([
    { id: "1", type: "default", data: { label: "User 1", age: 25, hobbies: [] }, position: { x: 100, y: 100 } },
  ]);
  const [edges, setEdges] = useState([]);
  const [hobbies, setHobbies] = useState([
    "Dancing", "Singing", "Swimming", "Reading", "Music",
    "Gaming", "Cooking", "Traveling", "Painting", "Drawing",
    "Writing", "Photography", "Gardening", "Cycling", "Hiking",
    "Running", "Yoga", "Meditation", "Fishing", "Knitting",
    "Sewing", "Baking", "Scrapbooking", "Chess", "Coding",
    "Blogging", "Bird Watching", "Rock Climbing", "Martial Arts",
    "Skateboarding", "Surfing", "Pottery", "Woodworking", "Calligraphy",
    "Playing Guitar", "Playing Piano", "Acting", "Magic Tricks",
    "Puzzle Solving", "Playing Cards", "Origami", "Journaling",
    "DIY Crafts", "Karaoke", "Volunteer Work", "Board Games",
  ]);

  const addNode = (name, age) => {
    const id = `${nodes.length + 1}`;
    const newNode = {
      id,
      type: "default",
      data: { label: `${name}, Age: ${age}`, age, hobbies: [] },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const addHobbyToNode = (nodeId, hobby) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, hobbies: [...node.data.hobbies, hobby] } }
          : node
      )
    );
    setHobbies((prevHobbies) => prevHobbies.filter((h) => h !== hobby));
  };

  return (
    <DnDContext.Provider value={{ nodes, edges, hobbies, setNodes, setEdges, addNode, addHobbyToNode }}>
      {children}
    </DnDContext.Provider>
  );
};

export { DnDProvider };
