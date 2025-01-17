import React from 'react';
import DnDFlow from './DndFlow';
import './index.css';
import './xy-theme.css';
import { DnDProvider } from './DND/DnDContext';

const App = () => {
  return (
    <DnDProvider>
    < DnDFlow />
   </DnDProvider>
  );
};

export default App;
