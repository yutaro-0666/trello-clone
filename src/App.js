import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';
import { useState } from 'react';
import { Header } from './components/header/header';
import { TaskCards } from './components/task/TaskCards';

function App() {
  return (
    <div className="app">
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;
