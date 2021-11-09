import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';

const Typography = styled(MuiTypography)(({ theme }) => ({
	fontSize: '0.875rem',
	lineHeight: '1.625rem',
	color: theme.palette.primary.text,
}));

const Link = styled(MuiLink)(({ theme }) => ({
	width: 20,
	height: 20,
	color: 'black',
}));

const useStyles = makeStyles(({ theme }) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '4% 11%',
		margin: '46px 105px',
		backgroundColor: '#F5F7FE',
		borderRadius: 30,
	},
	social: {
		display: 'flex',
		alignItems: 'center',
		'& > *': {
			'&:not(:last-child)': {
				marginRight: 17,
			},
		},
	},
}));

const MainAppFooter = (props) => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Typography>Contact us: dogegf@dogegf.com</Typography>

			<Typography>All Rights Reserved © DogeGF</Typography>

			<Box className={classes.social}>
				<Link href="#">
					<TwitterIcon />
				</Link>

				<Link href="#">
					<TwitterIcon />
				</Link>

				<Link href="#">
					<TwitterIcon />
				</Link>

				<Link href="#">
					<TwitterIcon />
				</Link>

				<Link href="#">
					<TwitterIcon />
				</Link>

				<Link href="#">
					<TwitterIcon />
				</Link>

				<Link href="#">
					<TwitterIcon />
				</Link>
			</Box>
		</Box>
	);
};

export default MainAppFooter;
