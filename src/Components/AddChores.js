import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';

function AddChore(props) {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const chore_name = formValues.choreName;
      const chore_description = formValues.choreDescription;
      const response = await fetch('http://localhost:5000/chores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chore_name: chore_name,
          chore_description: chore_description,
          user_id: props.currentUser.user_id,
        }),
      });
      props.setUserChores(getUserChores(props.currentUser));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
        direction="column"
      >
        <TextField
          helperText="Please insert the name of the chore."
          id="choreName-input"
          name="choreName"
          label="Chore"
          type="text"
          value={formValues.chore_name}
          onChange={handleInputChange}
        />

        <TextField
          id="choreDesc-input"
          name="choreDescription"
          label="Chore Description"
          type="text"
          value={formValues.chore_description}
          onChange={handleInputChange}
        />
      </Grid>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default AddChore;
