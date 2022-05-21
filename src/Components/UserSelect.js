import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
let api = 'http://chores-express.herokuapp.com/';
export default function UserSelect(props) {
	let [users, setUsers] = useState();
	let [currentUser, setCurrentUser] = useState({});
	let [userChores, setUserChores] = useState([]);
	let [currentUserName, setCurrentUserName] = useState('');

	const getUsers = async () => {
		try {
			const response = await fetch(`${api}users`);
			const jsonData = await response.json();
			setUsers(jsonData);
		} catch (error) {
			console.error(error.message);
		}
	};
	useEffect(() => {
		getUsers();
		getUserChores();
	}, []);

	const getUserChores = async () => {
		try {
			const response = await fetch(`${api}${currentUser.user_id}`);
			const jsonData = await response.json();
			setUserChores(jsonData);
		} catch (error) {
			console.error(error.message);
		}
	};

	const handleChange = (event) => {
		setCurrentUser(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120, maxWidth: 500 }} className='UserSelect'>
			<FormControl fullWidth>
				<InputLabel id=''>Select User</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={currentUser.user_name}
					label='User select'
					onChange={handleChange}
				>
					{users?.map((user, i) => (
						<MenuItem value={user} key={i}>
							{user.user_name}
							{console.log(currentUser)}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
