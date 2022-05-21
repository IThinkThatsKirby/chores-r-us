import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';

export default function UserSelect() {
	let [users, setUsers] = useState();
	let [currentUser, setCurrentUser] = useState('Select user');

	const getUsers = async () => {
		try {
			const response = await fetch('chores-express.herokuapp.com/users');
			console.log(response);
			const jsonData = await response.json();
			setUsers(jsonData);
		} catch (error) {
			console.error(error.message);
		}
	};
	useEffect(() => {
		getUsers();
	}, []);

	const handleChange = (event) => {
		getUsers();
		setCurrentUser(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120, maxWidth: 500 }} className='UserSelect'>
			<FormControl fullWidth>
				<InputLabel id='demo-simple-select-label'>Select User</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={currentUser}
					label='User select'
					onChange={handleChange}
				>
					{users?.map((user, i) => (
						<MenuItem value={user.user_name} key={i}>
							{user.user_name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
