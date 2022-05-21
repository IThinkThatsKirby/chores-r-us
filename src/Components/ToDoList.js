import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import '../styles/main.css';
// require('dotenv').config();
function ToDoList() {
	const choreItems = [
		{
			chore_id: 2,
			chore_name: 'Do homework',
			chore_description: null,
			completed: false,
			user_id: null,
			confirmed: false,
		},
		{
			chore_id: 5,
			chore_name: 'Do homework',
			chore_description: null,
			completed: false,
			user_id: null,
			confirmed: false,
		},
		{
			chore_id: 6,
			chore_name: 'done did dimadome',
			chore_description: null,
			completed: false,
			user_id: null,
			confirmed: false,
		},
		{
			chore_id: 7,
			chore_name: 'done did testsetsetset',
			chore_description: null,
			completed: false,
			user_id: null,
			confirmed: false,
		},
		{
			chore_id: 8,
			chore_name: 'Vaccuum the driveway',
			chore_description: null,
			completed: false,
			user_id: null,
			confirmed: false,
		},
		{
			chore_id: 9,
			chore_name: 'Comb my teeth',
			chore_description: null,
			completed: false,
			user_id: null,
			confirmed: false,
		},
		{
			chore_id: 10,
			chore_name: 'Comb my shoes',
			chore_description: null,
			completed: false,
			user_id: null,
			confirmed: false,
		},
	];

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
						<Button className='ChoresButton'> Done? </Button>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default ToDoList;
