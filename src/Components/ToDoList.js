import React, { useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import '../styles/main.css';
import CreateChore from '../Modals/CreateChoreModal';
import EditChoreModal from '../Modals/EditChoreModal';
function ToDoList(props) {
  const choreItems = [...props.userChores];

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
      console.log(props.userChores);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUserChores(props.currentUser);
  }, [props.userChores]);

  // const editUserChore = async (id) => {
  //   try {
  //     const editChore = await fetch(`http://localhost:5000/chores/${id}`, {
  //       method: 'PUT',
  //     });
  //     props.setUserChores(
  //       props.userChores.filter((chore) => chore.chore_id !== id)
  //     );
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '400px', minWidth: '100%' }}>
      <CreateChore currentUser={props.currentUser} />
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
