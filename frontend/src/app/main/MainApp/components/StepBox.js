import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
	titleBox: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 11,
	},
	label: {
		width: 36,
		height: 36,
		padding: '7px 12px',
		marginRight: 18,
		borderRadius: 99999,
		backgroundColor: '#E3E8FA',
		color: '#0044EB',
		textAlign: 'center',
		fontWeight: 700,
		fontSize: '1.125rem',
		lineHeight: '1.375rem',
	},
	title: {
		fontWeight: 600,
		fontSize: '1.5rem',
		lineHeight: '1.8rem',
		color: theme.palette.primary.headText,
	},
	description: {
		marginLeft: 54,
		fontSize: '0.875rem',
		lineHeight: '1.625rem',
		color: theme.palette.primary.text,
	},
}));

const StepBox = (props) => {
	const classes = useStyles();

	return (
		<Box>
			<Box className={classes.titleBox}>
				<Typography className={classes.label}>{props.step}</Typography>
				<Typography className={classes.title}>{props.title}</Typography>
			</Box>
			<Typography className={classes.description}>{props.children}</Typography>
		</Box>
	);
};

export default StepBox;
