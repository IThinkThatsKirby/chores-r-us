import React from 'react';
import NavBar from '../Components/NavBar';
import ToDoList from '../Components/ToDoList';
export default function ViewChores(props) {
  return (
    <div className="viewChoresDiv">
      <NavBar />
      <ToDoList userChores={props.userChores} />
    </div>
  );
}
