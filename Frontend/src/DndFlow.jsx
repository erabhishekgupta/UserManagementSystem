import React, { useCallback, useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import Sidebar from "./DND/Sidebar";

const initialNodes = [];

const initialEdges = [];

const DnDFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [userId, setUserId] = useState(1); // Track user IDs for unique nodes

  // Handle user node creation from sidebar
  const addUser = (userName, userAge) => {
    const newUserNode = {
      id: `user-${userId}`,
      type: "input",
      position: { x: 250, y: 100 * userId }, // Position new user nodes dynamically
      data: {  label: `${userName}, Age: ${userAge}` },
    };
    setNodes((nds) => [...nds, newUserNode]);
    setUserId((prevId) => prevId + 1); // Increment the user ID
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = event.target.getBoundingClientRect();
      const hobby = event.dataTransfer.getData("hobby");
      const targetUserId = event.dataTransfer.getData("userId"); // To identify the parent user

      if (hobby) {
        const newNode = {
          id: `hobby-${nodes.length + 1}`,
          type: "default",
          position: {
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
          },
          data: { label: hobby },
        };
        setNodes((nds) => [...nds, newNode]);

        // Automatically add an edge to the parent user node if a user is targeted
        if (targetUserId) {
          setEdges((eds) =>
            addEdge(
              { id: `edge-${targetUserId}-${newNode.id}`, source: targetUserId, target: newNode.id },
              eds
            )
          );
        }
      }
    },
    [nodes, setNodes, setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar addUser={addUser} />
      <div
        style={{
          flexGrow: 1,
          height: "100%",
          background: "#ddd",
        }}
      >
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <Background />
            <Controls />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default DnDFlow;
