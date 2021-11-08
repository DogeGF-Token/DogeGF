import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 370,
	},
	photo: {
		marginBottom: 15,
	},
	date: {
		marginBottom: 6,
		fontWeight: 400,
		fontSize: '0.875rem',
		lineHeight: '1.625rem',
	},
	title: {
		fontWeight: 600,
		fontSize: '1.125rem',
		lineHeight: '1.875rem',
	},
}));

const BlogBox = (props) => {
	const classes = useStyles();
	const { id, photo, date, title } = props;

	return (
		<Link className={classes.root} href={id} underline="none">
			<img className={classes.photo} src={photo} alt="blog" />
			<Typography className={classes.date}>{date}</Typography>
			<Typography className={classes.title}>{title}</Typography>
		</Link>
	);
};

export default BlogBox;
