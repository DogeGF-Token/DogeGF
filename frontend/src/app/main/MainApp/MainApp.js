import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MuiIconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import MainAppHeader from './MainAppHeader';
import SectionLabel from './components/SectionLabel';
import SectionTitle from './components/SectionTitle';
import Button from './components/Button';
import StepBox from './components/StepBox';
import PhaseBox from './components/PhaseBox';
import TokenomicBox from './components/TokenomicBox';
import BlogBox from './components/BlogBox';

import { APP_HEADER_HEIGHT, PHASES, TOKENOMICS, BLOGS } from './constants';

const IconButton = styled(MuiIconButton)(({ theme }) => ({
	width: 60,
	height: 60,
	backgroundColor: '#17262F',
	color: 'white',
}));

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
	roadmapSection: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 74,
		marginBottom: 80,
	},
	roadmapSectionLabel: {
		marginBottom: 38,
	},
	roadmapSectionTitle: {
		marginBottom: 68,
	},
	roadmapSectionPanel: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		'& > *': {
			'&:not(:last-child)': {
				marginRight: 30,
			},
		},
	},
	tokenomicsSection: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: 20,
		marginBottom: 177,
	},
	tokenomicsSectionLabel: {
		marginBottom: 38,
	},
	tokenomicsSectionTitle: {
		marginBottom: 55,
	},
	tokenomicsSectionGrid: {
		width: 870,
	},
	blogSection: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '86px 213px 131px 213px',
		marginBottom: 142,
		borderRadius: 30,
		backgroundColor: '#F5F7FE',
	},
	blogSectionLabel: {
		marginBottom: 32,
	},
	blogSectionTitle: {
		marginBottom: 65,
	},
	blogSectionRocketman: {
		position: 'absolute',
		top: -224,
		left: -85,
	},
	blogSectionPanel: {
		display: 'flex',
	},
	blogSectionLeftButton: {
		marginTop: 100,
		marginRight: 50,
	},
	blogSectionRightButton: {
		marginTop: 100,
		marginLeft: 50,
	},
	blogSecionList: {
		display: 'flex',
		alignItems: 'center',
		'& > *': {
			'&:not(:last-child)': {
				marginRight: 30,
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

			<Box id="roadmap" className={classes.roadmapSection}>
				<SectionLabel className={classes.roadmapSectionLabel}>
					Past and Future
				</SectionLabel>

				<SectionTitle className={classes.roadmapSectionTitle}>
					Roadmap
				</SectionTitle>

				<Box className={classes.roadmapSectionPanel}>
					{PHASES.map((phase) => (
						<PhaseBox
							title={phase.title}
							season={phase.season}
							items={phase.items}
						/>
					))}
				</Box>
			</Box>

			<Box id="tokenomics" className={classes.tokenomicsSection}>
				<SectionLabel className={classes.tokenomicsSectionLabel}>
					Numbers and Stuff
				</SectionLabel>

				<SectionTitle className={classes.tokenomicsSectionTitle}>
					Tokenomics
				</SectionTitle>

				<Grid
					className={classes.tokenomicsSectionGrid}
					container
					spacing={3}
					rowSpacing={3}
				>
					{TOKENOMICS.map((tokenomic) => (
						<Grid item xs={4}>
							<TokenomicBox
								icon={tokenomic.icon}
								color={tokenomic.color}
								title={tokenomic.title}
								description={tokenomic.description}
							/>
						</Grid>
					))}
				</Grid>
			</Box>

			<Box id="blog" className={classes.blogSection}>
				<SectionLabel className={classes.blogSectionLabel}>Blog</SectionLabel>

				<SectionTitle className={classes.blogSectionTitle}>
					Read More
				</SectionTitle>

				<img
					className={classes.blogSectionRocketman}
					src="/assets/images/blogs/rocketman.png"
					alt="rocketman"
				/>

				<Box className={classes.blogSectionPanel}>
					<IconButton className={classes.blogSectionLeftButton}>
						<ArrowBackIcon />
					</IconButton>

					<Box className={classes.blogSecionList}>
						{BLOGS.map((blog) => (
							<BlogBox
								key={blog.id}
								id={blog.id}
								photo={blog.photo}
								date={blog.date}
								title={blog.title}
							/>
						))}
					</Box>

					<IconButton className={classes.blogSectionRightButton}>
						<ArrowForwardIcon />
					</IconButton>
				</Box>
			</Box>
		</Container>
	);
};

export default MainApp;
