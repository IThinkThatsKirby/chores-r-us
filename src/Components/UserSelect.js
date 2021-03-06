import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';

export default function UserSelect(props) {
  let [users, setUsers] = useState(null);

  const getUsers = async () => {
    try {
      const response = await fetch('http://chores-express.herokuapp.com/users');
      const jsonData = await response.json();
      setUsers(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const getUserChores = async (currentUser) => {
    try {
      const response = await fetch(
        `http://chores-express.herokuapp.com/users/${currentUser.user_id}`
      );
      const jsonData = await response.json();
      props.setUserChores(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (event) => {
    props.setCurrentUser(event.target.value);
    getUserChores(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 500 }} className="UserSelect">
      <FormControl fullWidth>
        <InputLabel id="">Select User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.currentUser?.user_name}
          label="User select"
          onChange={handleChange}
        >
          {users?.map((user, i) => (
            <MenuItem value={user} key={i}>
              {user.user_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
