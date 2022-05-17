import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
// import Card from '@mui/material/Card';
import {
	AllInclusive,
	EngineeringOutlined,
	PaidOutlined,
} from '@mui/icons-material/';
import '../styles/main.css'; 

export default function Section() {
	const sectionItems = [
		{
			id: 1,
			icon: <EngineeringOutlined sx={{ fontSize: 100 }} color="primary" />,
			sentence: 'Solving the problem of chores not getting done',
		},
		{
			id: 2,
			icon: <AllInclusive sx={{ fontSize: 100 }} color="primary" />,
			sentence: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		},
		{
			id: 3,
			icon: <PaidOutlined sx={{ fontSize: 100 }} color="primary" />,
			sentence: 'Flexible payment plans',
		},
	];

	return (
		<Box sx={{ flexGrow: 1, minHeight: '400px' }}>
			<Grid container className="sectionGridContainer">
				{sectionItems.map((item) => (
					<Grid
						item
						xs={12}
						md={3.5}
						minHeight={300}
						key={item.id}
						className="sectionGridItem"
					>
						{item.icon}
						<Typography>{item.sentence}</Typography>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
