import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Chores from '../src/Pages/Chores.js';
import Landing from './Pages/Landing.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
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
			<main className="App">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="chores" element={<Chores />} />
				</Routes>

				<h1>HOWDY WORLD!!</h1>
			</main>
		</ThemeProvider>
	);
}
export default App;
