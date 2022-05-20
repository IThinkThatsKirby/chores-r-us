import React from 'react';
import NavBar from '../Components/NavBar';
// import ToDoList from '../Components/ToDoList';
import UserSelect from '../Components/UserSelectTest';

export default function EditChores() {
  // const getUsers = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/users');
  //     const jsonData = await response.json();
  //     console.log(jsonData);
  //     setUsers(jsonData);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  return (
    <div>
      <NavBar />
      <UserSelect />
    </div>
  );
}

//     "" ""    ""
//     "" ""
//     """""    ""
//     "" ""    ""
//     "" ""    ""
