import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';

function AddChore() {
  const [formValues, setFormValues] = useState('');
  console.log(formValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
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
        ,
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
