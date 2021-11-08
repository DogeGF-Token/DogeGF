import { useState, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Popper from '@mui/material/Popper';

import Button from './components/Button';

import { APP_HEADER_HEIGHT, LOGO_URL, NAVIGATION_ITEMS } from './constants';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: APP_HEADER_HEIGHT,
	},
	logoBox: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: 105,
	},
	logo: {
		width: 80,
		height: 80,
		marginRight: 10,
	},
	title: {
		fontWeight: 700,
		fontSize: '1.5rem',
		lineHeight: '3.125rem',
		color: theme.palette.primary.headText,
	},
	navigation: {
		display: 'flex',
		fontWeight: 400,
		fontSize: '0.938rem',
		lineHeight: '1.125rem',
		color: theme.palette.primary.headText,
		'& > *': {
			'&:not(:last-child)': {
				marginRight: 20,
			},
		},
	},
	vaultsButton: {
		marginRight: 55,
	},
	popper: {
		zIndex: 1,
		marginTop: '0.25em !important',
	},
	arrow: {
		position: 'absolute',
		top: 0,
		left: '50%',
		width: '3em',
		height: '1em',
		marginTop: '-0.9em',
		fontSize: 10,
		'&::before': {
			display: 'block',
			margin: 'auto',
			width: 0,
			height: 0,
			borderStyle: 'solid',
			borderWidth: '0 1em 1em 1em',
			borderColor: `transparent transparent ${theme.palette.primary.main} transparent`,
			content: '""',
		},
	},
	paper: {
		padding: '9px 29px',
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		boxShadow: '0 15.1525px 42.427px rgba(1, 33, 58, 0.07)',
		fontWeight: 600,
		fontSize: '1.125rem',
		lineHeight: '1.375rem',
	},
}));

const MainAppHeader = (props) => {
	const classes = useStyles();
	const arrowRef = useRef();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleVaultsButtonClick = (e) => {
		setAnchorEl(e.currentTarget);
		setTimeout(() => setAnchorEl(null), 700);
	};

	return (
		<Box className={classes.root}>
			<Box className={classes.logoBox}>
				<img className={classes.logo} src={LOGO_URL} alt="DogeGF" />
				<Typography className={classes.title}>DogeGF</Typography>
			</Box>

			<Box className={classes.navigation}>
				{NAVIGATION_ITEMS.map((item) => (
					<Link key={item.tag} href={item.tag} underline="none">
						{item.label}
					</Link>
				))}
			</Box>

			<Button
				className={classes.vaultsButton}
				variant="outlined"
				onClick={handleVaultsButtonClick}
			>
				DogeGF Vaults
			</Button>

			<Popper
				className={classes.popper}
				open={Boolean(anchorEl)}
				anchorEl={anchorEl}
				placement="bottom"
			>
				<span className={classes.arrow} ref={arrowRef} />
				<Paper className={classes.paper}>DogeGF vaults coming soon</Paper>
			</Popper>
		</Box>
	);
};

export default MainAppHeader;
