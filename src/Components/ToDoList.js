import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import '../styles/main.css';
function ToDoList() {
	const choreItems = fetch('http://chores-express.herokuapp.com/users/9', {
		method: 'GET',
		headers: {},
	})
		.then((response) => {
			console.log(response);
		})
		.catch((err) => {
			console.error(err);
		});

	return (
		<Box sx={{ flexGrow: 1, minHeight: '400px', minWidth: '100%' }}>
			<Grid container className='todoListGridContainer'>
				{choreItems.map((chores) => (
					<Grid
						item
						xs={3}
						md={3.5}
						minHeight={100}
						key={chores.chore_id}
						className='toDoListGridItem'
					>
						{/* {chores.icon} */}
						<Typography>{chores.chore_name}</Typography>
						<Button className='ChoresButton'></Button>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default ToDoList;
