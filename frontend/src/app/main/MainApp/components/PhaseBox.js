import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: 370,
		height: 480,
		paddingTop: 55,
		border: '1px solid #C9D5FF',
		borderRadius: 16,
		backgroundColor: '#F5F7FE',
	},
	title: {
		fontWeight: 'bold',
		fontSize: '2.5rem',
		lineHeight: '3rem',
		color: theme.palette.primary.headText,
	},
	season: {
		fontSize: '0.875rem',
		lineHeight: '1.625rem',
		color: theme.palette.primary.text,
		marginBottom: 41,
	},
	itemList: {
		marginLeft: 40,
		marginRight: 'auto',
	},
	itemBox: {
		display: 'flex',
		alignItems: 'center',
	},
	itemIcon: {
		width: 10,
		marginRight: 10,
		color: '#0044EB',
	},
	item: {
		fontSize: '0.875rem',
		lineHeight: '2.5rem',
		color: theme.palette.primary.text,
	},
}));

const PhaseBox = (props) => {
	const classes = useStyles();
	const { title, season, items } = props;

	return (
		<Box className={classes.root}>
			<Typography className={classes.title}>{title}</Typography>
			<Typography className={classes.season}>{season}</Typography>
			<Box className={classes.itemList}>
				{items.map((item, index) => (
					<Box key={index} className={classes.itemBox}>
						<CheckIcon className={classes.itemIcon} />
						<Typography className={classes.item}>{item}</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default PhaseBox;
