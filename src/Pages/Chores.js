import React from 'react';
import NavBar from '../Components/NavBar';
import ToDoList from '../Components/ToDoList';
export default function Chores(props) {
  return (
    <div className="viewChoresDiv">
      <NavBar />
      <ToDoList
        userChores={props.userChores}
        setUserChores={props.setUserChores}
        currentUser={props.currentUser}
      />
    </div>
  );
}
