import { useState, useEffect } from 'react';
const CHORES_API = process.env.CHORES_API;

function TestComponent() {
	let [users, setUsers] = useState({});

	const getUsers = async () => {
		try {
			const response = await fetch(`${CHORES_API}/users`);
			const jsonData = await response.json();
			console.log(jsonData);
			setUsers(jsonData);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);
}

export default TestComponent;
