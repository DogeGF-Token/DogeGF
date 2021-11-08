import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles((theme) => ({
	root: {},
	questionBox: {
		display: 'flex',
		alignItems: 'center',
		color: theme.palette.primary.headText,
	},
	question: {
		fontWeight: 600,
		fontSize: '1.5rem',
		lineHeight: '1.8rem',
		marginLeft: 15,
	},
	answer: {
		fontSize: '0.875rem',
		lineHeight: '1.625rem',
		color: theme.palette.primary.text,
		marginTop: 14,
	},
}));

const FaqBox = (props) => {
	const classes = useStyles();
	const { open, question, answer, onToggle } = props;

	return (
		<Box className={classes.root}>
			<Box className={classes.questionBox}>
				{open && <RemoveIcon onClick={onToggle} />}
				{!open && <AddIcon onClick={onToggle} />}

				<Typography className={classes.question}>{question}</Typography>
			</Box>

			<Collapse in={open}>
				<Typography className={classes.answer}>{answer}</Typography>
			</Collapse>
		</Box>
	);
};

export default FaqBox;
