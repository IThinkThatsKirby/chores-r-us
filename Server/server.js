require('dotenv').config();
const express = require('express');
const app = express();
const exPort = process.env.exPORT;

app.get('/testing', (req, res) => {
	res.send('Testing');
	console.log('Testing');
});

app.post('/testing', (req, res) => {
	res.send('postTesting');
});

app.put('/testing', (req, res) => {
	res.send('puttesting');
});

app.delete('/testing', (req, res) => {
	res.send('deleattesting');
});

app.listen(exPort, () => {
	console.log(`ALIVE ${exPort}`);
});
