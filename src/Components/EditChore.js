import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';

function EditChore(props) {
  console.log(props.chore.chore_id);
  const [formValues, setFormValues] = useState({
    choreName: props.chore.chore_name,
    choreDescription: props.chore.chore_description,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const chore_name = formValues.choreName;
      const chore_description = formValues.choreDescription;
      const response = await fetch(
        `http://localhost:5000/chores/${props.chore.chore_id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chore_name: chore_name,
            chore_description: chore_description,
            user_id: props.currentUser.user_id,
            chore_done: 1,
          }),
        }
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {console.log(props)}
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
          value={formValues.choreName}
          onChange={handleInputChange}
        />

        <TextField
          id="choreDesc-input"
          name="choreDescription"
          label="Chore Description"
          type="text"
          value={formValues.choreDescription}
          onChange={handleInputChange}
        />
      </Grid>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default EditChore;
