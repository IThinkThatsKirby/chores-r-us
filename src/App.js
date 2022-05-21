import './App.css';

import { Routes, Route } from 'react-router-dom';
import ViewChores from './Pages/ViewChores.js';
import EditChores from './Pages/EditChores';
import Landing from './Pages/Landing.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from './Components/NavBar';
import Rewards from './Pages/Rewards';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect } from 'react';

function App() {
	//State variables that will need to be used across the app
	let [users, setUsers] = useState();
	let [currentUser, setCurrentUser] = useState('Select User');

	const getUsers = async () => {
		try {
			const response = await fetch('chores-express.herokuapp.com/users');
			const jsonData = await response.json();
			setUsers(jsonData);
		} catch (error) {
			console.error(error.message);
		}
	};
	const handleUserSelect = (event) => {
		getUsers();
		setCurrentUser(event.target.value);
	};

	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});
	const lightTheme = createTheme({
		palette: {
			mode: 'light',
		},
	});
	const customDarkTheme = createTheme({
		palette: {
			primary: {
				main: '#aa69ff',
				contrastText: '#000000',
			},
			secondary: {
				main: '#f50057',
			},
			error: {
				main: '#ff0000',
			},
			text: {
				primary: 'rgba(255,255,255,1)',
			},
			background: {
				default: '#303030',
				paper: '#424242',
			},
		},
	});
	return (
		<ThemeProvider theme={customDarkTheme}>
			<CssBaseline enableColorScheme />
			<main className='app'>
				<Routes>
					<Route path='/' element={<Landing getUsers={getUsers} />} />
					<Route path='/Manage%20Chores' element={<EditChores />} />
					<Route path='/View%20Chores' element={<ViewChores />} />
					<Route path='/Rewards' element={<Rewards />} />
				</Routes>
			</main>
		</ThemeProvider>
	);
}
export default App;
