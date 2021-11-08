import { alpha } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 270,
		height: 270,
		paddingTop: 50,
		paddingLeft: 42,
		borderRadius: 16,
		boxShadow: '0 25px 70px rgba(1, 33, 58, 0.07)',
		textAlign: 'left',
	},
	icon: ({ color }) => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 80,
		height: 80,
		marginBottom: 21,
		borderRadius: 99999,
		backgroundColor: alpha(color, 0.2),
	}),
	title: {
		fontWeight: 600,
		fontSize: '1.125rem',
		lineHeight: '1.35rem',
		color: theme.palette.primary.headText,
		marginBottom: '13px !important',
	},
	description: {
		fontSize: '0.875rem',
		lineHeight: '1.625rem',
		color: theme.palette.primary.text,
	},
}));

const TokenomicBox = (props) => {
	const { color, icon, title, description } = props;
	const classes = useStyles({ color });

	return (
		<Box className={classes.root}>
			<Box className={classes.icon}>
				<img src={icon} alt={icon} />
			</Box>
			<Typography className={classes.title}>{title}</Typography>
			<Typography className={classes.description}>{description}</Typography>
		</Box>
	);
};

export default TokenomicBox;
