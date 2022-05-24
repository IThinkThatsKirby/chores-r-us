import React, { useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import '../styles/main.css';
import CreateChore from '../Modals/CreateChoreModal';
import EditChoreModal from '../Modals/EditChoreModal';
function ToDoList(props) {
  const [choreItems, setChoreItems] = [...props.userChores];

  const deleteUserChore = async (id) => {
    try {
      const deleteChore = await fetch(`http://localhost:5000/chores/${id}`, {
        method: 'DELETE',
      });
      props.setUserChores(
        props.userChores.filter((chore) => chore.chore_id !== id)
      );
    } catch (error) {
      console.error(error.message);
    }
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

  passSetState(newChore){
    props.setUserChores([...userChores, newItem])
  }

  useEffect(() => {
    getUserChores(props.currentUser);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, minHeight: '400px', minWidth: '100%' }}>
      <CreateChore
        currentUser={props.currentUser}
        setUserChores={props.setUserChores}
        userChores={props.userChores}
      />
      <Grid container className="todoListGridContainer">
        {choreItems.map((chore) => (
          <Grid
            item
            xs={3}
            md={3.5}
            minHeight={100}
            key={chore.chore_id}
            className="toDoListGridItem"
          >
            {/* {chore.icon} */}
            <Typography>Chore name: {chore.chore_name}</Typography>
            <Typography>
              Chore description: {chore.chore_description}
            </Typography>

            <Button
              className="choreButton"
              variant="contained"
              color="primary"
              // onClick={() => {
              // }}
            >
              {' '}
              <EditChoreModal
                chore={chore}
                currentUser={props.currentUser}
                setUserChores={props.setUserChores}
                userChores={props.userChores}
              />{' '}
            </Button>
            <Button
              className="choreButton"
              variant="contained"
              color="primary"
              onClick={() => {
                deleteUserChore(chore.chore_id);
              }}
            >
              {' '}
              Completed/Delete{' '}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ToDoList;
