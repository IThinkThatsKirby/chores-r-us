import React from 'react';
import NavBar from '../Components/NavBar';
import ToDoList from '../Components/ToDoList'
export default function ViewChores() {
  return (
    <div className="viewChoresDiv">
      <NavBar />
      <ToDoList />
    </div>
  );
}
