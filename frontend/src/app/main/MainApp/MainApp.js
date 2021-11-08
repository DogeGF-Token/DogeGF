import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';

import MainAppHeader from './MainAppHeader';

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 1810,
	},
}));

const MainApp = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root} fixed>
			<MainAppHeader />
		</Container>
	);
};

export default MainApp;
