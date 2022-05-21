import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const userName = []; //route to get users from DB
 // do modale for pop up
export default function Form() {
	const [currency, setCurrency] = React.useState('USD');

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};

	return (
		<Box
			component='form'
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete='off'
		>
			<div>
				<TextField
					id='filled-select-currency-native'
					select
					label='Select your User lol'
					value={userName}
					onChange={handleChange}
					SelectProps={{
						native: true,
					}}
					helperText='Please select your currency'
					variant='filled'
				>
					{userName.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</TextField>
				<TextField required id='outlined-required' label="Tell 'em !!" />
			</div>
		</Box>
	);
}
