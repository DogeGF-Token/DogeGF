import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import MainAppHeader from './MainAppHeader';
import SectionLabel from './components/SectionLabel';
import SectionTitle from './components/SectionTitle';
import Button from './components/Button';

import { APP_HEADER_HEIGHT } from './constants';

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 1810,
	},
	homeSection: {
		height: `calc(100vh - ${APP_HEADER_HEIGHT}px)`,
		padding: '168px 0 0 320px',
		borderRadius: 30,
		background: `url('/assets/images/slider.png') no-repeat center center`,
		backgroundSize: 'cover',
	},
	homeSectionLabel: {
		marginBottom: 35,
	},
	homeSectionTitle: {
		marginBottom: 36,
	},
	homeSectionDescription: {
		marginBottom: 62,
		color: theme.palette.primary.text,
		fontSize: '2.25rem',
		lineHeight: '1.625rem',
	},
}));

const MainApp = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root} fixed>
			<MainAppHeader />

			<Box id="home" className={classes.homeSection}>
				<SectionLabel className={classes.homeSectionLabel}>
					DogeGF in a Nutshell
				</SectionLabel>

				<SectionTitle className={classes.homeSectionTitle}>
					A token for kind gestures <br />
					based on reciprocity
				</SectionTitle>

				<Typography className={classes.homeSectionDescription}>
					The future is kind
				</Typography>

				<Button variant="contained">Litepaper</Button>
			</Box>
		</Container>
	);
};

export default MainApp;
