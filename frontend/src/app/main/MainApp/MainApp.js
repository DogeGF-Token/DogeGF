import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import MainAppHeader from './MainAppHeader';
import SectionLabel from './components/SectionLabel';
import SectionTitle from './components/SectionTitle';
import Button from './components/Button';
import StepBox from './components/StepBox';

import { APP_HEADER_HEIGHT } from './constants';

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 1810,
	},
	homeSection: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: `calc(100vh - ${APP_HEADER_HEIGHT}px)`,
		borderRadius: 30,
		background: `url('/assets/images/slider.png') no-repeat center center`,
		backgroundSize: 'cover',
	},
	homeSectionBox: {
		marginLeft: '15%',
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
	aboutSection: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: 20,
		marginBottom: 128,
	},
	aboutSectionLabel: {
		marginBottom: 27,
	},
	aboutSectionTitle: {
		marginBottom: 45,
	},
	aboutSectionDescription: {
		color: theme.palette.primary.text,
		fontSize: '1.5rem',
		lineHeight: '3rem',
		textAlign: 'center',
	},
	buySection: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		paddingTop: 20,
		marginBottom: 140,
	},
	buySectionLabel: {
		marginBottom: 34,
	},
	buySectionTitle: {
		marginBottom: 49,
	},
	buySectionStepList: {
		'& > *': {
			'&:not(:last-child)': {
				marginBottom: 32,
			},
		},
	},
	buySectionActionPanel: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	buySectionActionPhone: {
		marginBottom: 13,
	},
	buySectionActionButtonBox: {
		display: 'flex',
		alignItems: 'center',
		'& > *': {
			textTransform: 'none',
			'&:not(:last-child)': {
				marginRight: 31,
			},
		},
	},
}));

const MainApp = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root} fixed>
			<MainAppHeader />

			<Box id="home" className={classes.homeSection}>
				<Box className={classes.homeSectionBox}>
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
			</Box>

			<Box id="about" className={classes.aboutSection}>
				<SectionLabel className={classes.aboutSectionLabel}>
					Origins
				</SectionLabel>

				<SectionTitle className={classes.aboutSectionTitle}>
					DogeGF Story
				</SectionTitle>

				<Typography className={classes.aboutSectionDescription}>
					Thousands of years ago, people relied on reciprocity as a form of
					transaction because <br />
					there was no government or trade. Reciprocity is a two-way street that
					rewards kind <br />
					actions or punishes unkind ones. With DogeGF, we are building the
					world's first token <br />
					for kind gestures based on reciprocity.
				</Typography>
			</Box>

			<Box id="buy" className={classes.buySection}>
				<Box>
					<SectionLabel className={classes.buySectionLabel}>
						Tutorial
					</SectionLabel>

					<SectionTitle className={classes.buySectionTitle}>
						How to Buy $DOGEGF
					</SectionTitle>

					<Box className={classes.buySectionStepList}>
						<StepBox step="1" title="Create a Metamask Wallet">
							$DOGEGF token is available on the Ethereum blockchain. <br />
							MetaMask is the market leader in ERC20 (Ethereum) wallets. <br />
							On Google Chrome, visit <Link href="#">metamask.io</Link> to
							download the <br />
							extension and set up a wallet. On mobile? Get MetaMask's <br />
							app for <Link href="#">iPhone</Link> or{' '}
							<Link href="#">Android</Link>.
						</StepBox>

						<StepBox step="2" title="Send $ETH to MetaMask">
							Buy Ethereum through MetaMask or transfer it to your <br />
							MetaMask wallet address from another wallet <br />
							(e.g. Coinbase or Binance).
						</StepBox>

						<StepBox step="3" title="Visit Uniswap or Sushiswap">
							You can currently buy $DOGEGF on <Link href="#">Uniswap</Link> or{' '}
							<Link href="#">Sushiswap</Link>. <br />
							Be carefull to use only and only this contract adress: <br />
							0xfb130d93e49dca13264344966a611dc79a456bc5
						</StepBox>

						<StepBox step="4" title="Swap $ETH for $DOGEGF">
							Enter the amount of $ETH you would like to swap for <br />
							$DOGEGF. Click Connect Wallet then Swap.
						</StepBox>

						<StepBox step="*" title="Recommendation">
							In order for your transaction to happen quickly and <br />
							succesfully we recommend you to pay at least the average <br />
							gas price and set an appropriate slippage tolerance <br />
							depending on the volatility at the moment of your <br />
							transaction. Gas prices can be checked on{' '}
							<Link href="#">Etherscan</Link>.
						</StepBox>
					</Box>
				</Box>

				<Box className={classes.buySectionActionPanel}>
					<img
						className={classes.buySectionActionPhone}
						src="/assets/images/phone.png"
						alt="how to buy"
					/>
					<Box className={classes.buySectionActionButtonBox}>
						<Button variant="contained">Buy on Uniswap</Button>
						<Button variant="contained">Buy on Sushiswap</Button>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default MainApp;
