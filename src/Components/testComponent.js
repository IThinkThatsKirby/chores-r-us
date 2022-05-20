import { useState, useEffect } from 'react';

function TestComponent() {
  let [users, setUsers] = useState({});

  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/users');
      const jsonData = await response.json();
      console.log(jsonData);
      setUsers(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
}

export default TestComponent;
