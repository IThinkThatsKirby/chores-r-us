// import logo from './logo.svg';
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Chores from "../src/Pages/Chores.js";
import Landing from "./Pages/Landing.js";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";


// import { Router } from 'express';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
	const darkTheme = createTheme({
		palette: {
			type: 'dark',
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
				primary: 'rgba(255,255,255,0.69)',
			},
		},
	});
	return (
		<div className="App">
			<ThemeProvider theme={darkTheme}>
				<h1>HOWDY WORLD!!</h1>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="chores" element={<Chores />} />
				</Routes>
			</ThemeProvider>
		</div>
	);
}
export default App;
