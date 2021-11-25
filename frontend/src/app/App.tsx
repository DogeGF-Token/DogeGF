import Slider from 'react-slick';

import { useNavbarOpen, useSelectedFaqId, useTooltips } from './hooks';

import {
  BurgerIcon,
  CloseIcon,
  TwitterIcon,
  DiscordIcon,
  TelegramIcon,
  MediumIcon,
  RedditIcon,
  InstagramIcon,
  TiktokIcon,
  SliderArrow,
} from './components';

import {
  FAQS,
  LogoImg,
  PhoneImg,
  DollarImg,
  LockImg,
  TotalImg,
  AdImg,
  BurnImg,
  TeamImg,
  BrowserImg,
  Blog1Img,
  Blog2Img,
  Blog3Img,
  RocketmanImg,
  Art1Img,
  Art2Img,
  Art3Img,
  Art4Img,
  Art5Img,
  Art6Img,
  Art7Img,
  Art8Img,
} from './constants';

function App() {
  const selectedFaqId = useSelectedFaqId('');
  const [navbarOpen, setNavbarOpen] = useNavbarOpen(false);

  useTooltips();

  const handleClickVaults = () => {
    setNavbarOpen(false);
  };

  const handleClickScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <nav
        id="header"
        className="navbar navbar-expand-lg navbar-light position-sticky sticky-top bg-white"
      >
        <div className="navbar-container container-xxl h-100">
          <a className="navbar-brand p-0 h-100" href="/#">
            <div className="d-flex align-items-center h-100">
              <img src={LogoImg} alt="dogegf-logo" />
            </div>
          </a>
          <button
            className="navbar-toggler p-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            {!navbarOpen && <BurgerIcon />}
            {navbarOpen && <CloseIcon />}
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mx-auto mb-4 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#how-to-buy">
                  How to Buy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#roadmap">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tokenomics">
                  Tokenomics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#art">
                  Art
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#vaults">
                  DogeGF Vaults
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
            <button
              className="btn btn-outline-head border-2 text-uppercase"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="DogeGF vaults coming soon"
              onClick={handleClickVaults}
            >
              DogeGF Vaults
            </button>
          </div>
        </div>
      </nav>

      <div id="content" className="container-xxl px-0">
        <div id="home" className="container-fluid">
          <div className="home-container container-fluid p-lg-0 h-100">
            <div className="container-fluid h-100">
              <div className="row h-100">
                <div className="col col-lg-7 px-0">
                  <div className="panel-text container h-100 p-0 ms-0 ms-lg-5 ms-xxl-auto me-lg-0">
                    <div className="d-flex flex-column justify-content-lg-center h-100">
                      <label className="section-label">
                        DOGEGF IN A NUTSHELL
                      </label>
                      <h1 className="section-title">
                        A token for kind gestures based on reciprocity
                      </h1>
                      <p className="section-description">The future is kind</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="container-fluid px-lg-0">
          <div className="d-flex flex-column align-items-lg-center">
            <label className="section-label">Origins</label>
            <h2 className="section-title">DogeGF Story</h2>
            <p className="section-description text-lg-center">
              Thousands of years ago, people relied on reciprocity as a form of
              transaction because there was no government or trade. Reciprocity
              is a two-way street that rewards kind actions or punishes unkind
              ones. With DogeGF, we are building the world's first token for
              kind gestures based on reciprocity.
            </p>
          </div>
        </div>

        <div id="how-to-buy" className="container-fluid px-lg-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-6 px-0">
                <div className="panel-text container-fluid px-0 h-100">
                  <div className="d-flex flex-column">
                    <label className="section-label">Tutorial</label>
                    <h2 className="section-title">How to buy $DOGEGF</h2>
                    <ul className="list-unstyled">
                      <li>
                        <div className="step d-flex align-items-center flex-wrap">
                          <span className="step-label mb-md-0">1</span>
                          <h3 className="step-title w-100 w-md-auto">
                            Create a Metamask Wallet
                          </h3>
                        </div>
                        <p className="step-description">
                          $DOGEGF token is available on the Ethereum blockchain.
                          MetaMask is the market leader in ERC20 (Ethereum)
                          wallets. On Google Chrome, visit{' '}
                          <a
                            href="https://metamask.io/"
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            metamask.io
                          </a>{' '}
                          to download the extension and set up a wallet. On
                          mobile? Get MetaMask's app for{' '}
                          <a
                            href="https://metamask.app.link/skAH3BaF99"
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            iPhone
                          </a>{' '}
                          or{' '}
                          <a
                            href="https://metamask.app.link/bxwkE8oF99"
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            Android
                          </a>
                          .
                        </p>
                      </li>
                      <li>
                        <div className="step d-flex align-items-center flex-wrap">
                          <span className="step-label mb-md-0">2</span>
                          <h3 className="step-title w-100 w-md-auto">
                            Send $ETH to MetaMask
                          </h3>
                        </div>
                        <p className="step-description">
                          Buy Ethereum through MetaMask or transfer it to your
                          MetaMask wallet address from another wallet (e.g.
                          Coinbase or Binance).
                        </p>
                      </li>
                      <li>
                        <div className="step d-flex align-items-center flex-wrap">
                          <span className="step-label mb-md-0">3</span>
                          <h3 className="step-title w-100 w-md-auto">
                            Visit Uniswap or Sushiswap
                          </h3>
                        </div>
                        <p className="step-description">
                          You can currently buy $DOGEGF on{' '}
                          <a
                            href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xfb130d93e49dca13264344966a611dc79a456bc5"
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            Uniswap
                          </a>{' '}
                          or{' '}
                          <a
                            href="https://app.sushi.com/swap?inputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&outputCurrency=0xfb130d93e49dca13264344966a611dc79a456bc5"
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            Sushiswap
                          </a>
                          . Be carefull to use only and only this contract
                          adress: 0xfb130d93e49dca13264344966a611dc79a456bc5
                        </p>
                      </li>
                      <li>
                        <div className="step d-flex align-items-center flex-wrap">
                          <span className="step-label mb-md-0">4</span>
                          <h3 className="step-title w-100 w-md-auto">
                            Swap $ETH for $DOGEGF
                          </h3>
                        </div>
                        <p className="step-description">
                          Enter the amount of $ETH you would like to swap for
                          $DOGEGF. Click <b>Connect Wallet</b> then <b>Swap</b>.
                        </p>
                      </li>
                      <li>
                        <div className="step d-flex align-items-center flex-wrap">
                          <span className="step-label mb-md-0">*</span>
                          <h3 className="step-title w-100 w-md-auto">
                            Recommendation
                          </h3>
                        </div>
                        <p className="step-description">
                          In order for your transaction to happen quickly and
                          succesfully we recommend you to pay at least the
                          average gas price and set an appropriate slippage
                          tolerance depending on the volatility at the moment of
                          your transaction. Gas prices can be checked on{' '}
                          <a
                            href="https://etherscan.io/gastracker#historicaldata"
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            Etherscan
                          </a>
                          .
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 px-0">
                <div className="panel-action container-fluid px-0 h-lg-100">
                  <div className="d-flex flex-column align-items-md-center justify-content-center h-lg-100">
                    <img
                      className="d-none d-lg-block w-100"
                      src={PhoneImg}
                      alt="how-to-buy-phone"
                    />
                    <div className="d-flex align-items-center">
                      <a
                        className="btn btn-primary btn-uniswap"
                        href="https://app.uniswap.org/#/swap?outputCurrency=0xfb130d93e49dca13264344966a611dc79a456bc5"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Buy on Uniswap
                      </a>
                      <a
                        className="btn btn-primary"
                        href="https://app.sushi.com/swap?outputCurrency=0xfb130d93e49dca13264344966a611dc79a456bc5"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Buy on Sushiswap
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="roadmap" className="container-fluid px-lg-0 ms-0 ms-lg-auto">
          <div className="d-flex flex-column align-items-lg-center">
            <label className="section-label">Past and Future</label>
            <h2 className="section-title">Roadmap</h2>
            <div className="container-fluid px-0 px-lg-5">
              <div className="phase-list row mx-0">
                <div className="col-12 col-md-6 col-xxl-3 px-0">
                  <div className="phase-box">
                    <div className="container d-flex flex-column">
                      <h3 className="phase-title text-lg-center">Phase 1</h3>
                      <label className="phase-season text-lg-center">
                        Q2 2021
                      </label>
                      <ul className="list-unstyled">
                        <li>
                          <i className="bi bi-check" />
                          <span>Website launch</span>
                        </li>
                        <li>
                          <i className="bi bi-check" />
                          <span>Token launch</span>
                        </li>
                        <li>
                          <i className="bi bi-check" />
                          <span>Community giveaways and contests</span>
                        </li>
                        <li>
                          <i className="bi bi-check" />
                          <span>Face recognized system</span>
                        </li>
                        <li>
                          <i className="bi bi-check" />
                          <span>24/7 Full support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xxl-3 px-0">
                  <div className="phase-box">
                    <div className="container d-flex flex-column">
                      <h3 className="phase-title text-lg-center">Phase 2</h3>
                      <label className="phase-season text-lg-center">
                        Q3 2021
                      </label>
                      <ul className="list-unstyled">
                        <li>
                          <i className="bi bi-check" />
                          <span>Groundwork for strong community</span>
                        </li>
                        <li>
                          <i className="bi bi-check" />
                          <span>Coingecko listing</span>
                        </li>
                        <li>
                          <i className="bi bi-check" />
                          <span>Coinmarketcap listing</span>
                        </li>
                        <li>
                          <i className="bi bi-check" />
                          <span>Litepaper</span>
                        </li>
                        <li>
                          <i className="bi bi-check" />
                          <span>Reaching out to influencers</span>
                        </li>
                        <li>
                          <i className="bi bi-check" />
                          <span>1000 Holders</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xxl-3 px-0">
                  <div className="phase-box">
                    <div className="container d-flex flex-column">
                      <h3 className="phase-title text-lg-center">Phase 3</h3>
                      <label className="phase-season text-lg-center">
                        Q4 2021
                      </label>
                      <ul className="list-unstyled">
                        <li>
                          <i className="bi bi-check" />
                          <span>Prepare submission for contract audit</span>
                        </li>
                        <li>
                          <i className="bi bi-check" />
                          <span>DogeGT reward platform DogeGiFt</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xxl-3 px-0">
                  <div className="phase-box">
                    <div className="container d-flex flex-column">
                      <h3 className="phase-title text-lg-center">Phase 4</h3>
                      <label className="phase-season text-lg-center">
                        Q1 2022
                      </label>
                      <ul className="list-unstyled">
                        <li>
                          <i className="bi bi-check" />
                          <span>Coming soon</span>
                        </li>
                        <li>
                          <i className="bi bi-check" />
                          <span>Coming soon</span>
                        </li>
                        <li>
                          <i className="bi bi-check" />
                          <span>Coming soon</span>
                        </li>
                        <li>
                          <i className="bi bi-check" />
                          <span>Coming soon</span>
                        </li>
                        <li>
                          <i className="bi bi-check" />
                          <span>Coming soon</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="tokenomics"
          className="container-fluid px-lg-0 ms-0 ms-lg-auto"
        >
          <div className="d-flex flex-column align-items-lg-center">
            <label className="section-label">Numbers and Stuff</label>
            <h2 className="section-title">Tokenomics</h2>
            <div className="container-fluid px-0">
              <div className="tokenomics-list row">
                <div className="col-12 col-md-6 col-lg-4 px-0">
                  <div className="tokenomic-box container-fluid">
                    <div className="d-flex align-items-center flex-lg-wrap">
                      <div className="tokenomic-icon tokenomic-icon-1 flex-shrink-0 d-flex align-items-center justify-content-center">
                        <img src={DollarImg} alt="tokenomic-dollar" />
                      </div>
                      <div className="flex-grow-1 d-flex flex-column w-lg-100">
                        <h3 className="tokenomic-title">Token Symbol</h3>
                        <span className="tokenomic-description">$DOGEGF</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-0">
                  <div className="tokenomic-box container-fluid">
                    <div className="d-flex align-items-center flex-lg-wrap">
                      <div className="tokenomic-icon tokenomic-icon-2 flex-shrink-0 d-flex align-items-center justify-content-center">
                        <img src={LockImg} alt="tokenomic-lock" />
                      </div>
                      <div className="flex-grow-1 d-flex flex-column w-lg-100">
                        <h3 className="tokenomic-title">
                          Locked Liquidity in Uniswap & Sushiswap
                        </h3>
                        <span className="tokenomic-description">25%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-0">
                  <div className="tokenomic-box container-fluid">
                    <div className="d-flex align-items-center flex-lg-wrap">
                      <div className="tokenomic-icon tokenomic-icon-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                        <img src={TotalImg} alt="tokenomic-total" />
                      </div>
                      <div className="flex-grow-1 d-flex flex-column w-lg-100">
                        <h3 className="tokenomic-title">Total Supply</h3>
                        <span className="tokenomic-description">
                          69,420,000,000,000,000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-0">
                  <div className="tokenomic-box container-fluid">
                    <div className="d-flex align-items-center flex-lg-wrap">
                      <div className="tokenomic-icon tokenomic-icon-4 flex-shrink-0 d-flex align-items-center justify-content-center">
                        <img src={AdImg} alt="tokenomic-ad" />
                      </div>
                      <div className="flex-grow-1 d-flex flex-column w-lg-100">
                        <h3 className="tokenomic-title">
                          Marketing & Community (66% Locked)
                        </h3>
                        <span className="tokenomic-description">15%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-0">
                  <div className="tokenomic-box container-fluid">
                    <div className="d-flex align-items-center flex-lg-wrap">
                      <div className="tokenomic-icon tokenomic-icon-5 flex-shrink-0 d-flex align-items-center justify-content-center">
                        <img src={BurnImg} alt="tokenomic-burn" />
                      </div>
                      <div className="flex-grow-1 d-flex flex-column w-lg-100">
                        <h3 className="tokenomic-title">Burned Supply</h3>
                        <span className="tokenomic-description">50%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-0">
                  <div className="tokenomic-box container-fluid">
                    <div className="d-flex align-items-center flex-lg-wrap">
                      <div className="tokenomic-icon tokenomic-icon-6 flex-shrink-0 d-flex align-items-center justify-content-center">
                        <img src={TeamImg} alt="tokenomic-team" />
                      </div>
                      <div className="flex-grow-1 d-flex flex-column w-lg-100">
                        <h3 className="tokenomic-title">
                          Team Wallet (Locked)
                        </h3>
                        <span className="tokenomic-description">10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="blog" className="container-fluid">
          <div className="blog-container container-fluid">
            <img
              className="blog-rocketman"
              src={RocketmanImg}
              alt="rocketman"
            />
            <div className="d-flex flex-column align-items-lg-center">
              <div className="container">
                <div className="d-flex flex-column align-items-lg-center">
                  <label className="section-label">Blog</label>
                  <h2 className="section-title">Read more</h2>
                </div>
              </div>
              <div className="container px-0 px-lg-5">
                <Slider
                  {...{
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    nextArrow: <SliderArrow type="blog" direction="next" />,
                    prevArrow: <SliderArrow type="blog" direction="prev" />,
                    responsive: [
                      {
                        breakpoint: 992,
                        settings: {
                          slidesToShow: 2,
                          dots: true,
                        },
                      },
                      {
                        breakpoint: 600,
                        settings: {
                          slidesToShow: 1,
                          dots: true,
                        },
                      },
                    ],
                  }}
                >
                  <div className="blog-box container">
                    <div className="d-flex flex-column">
                      <img src={Blog1Img} alt="blog-1" />
                      <span>June 20, 2021</span>
                      <p>Reciprocity, the new experiment in crypto — part 1</p>
                    </div>
                  </div>
                  <div className="blog-box container">
                    <div className="d-flex flex-column">
                      <img src={Blog2Img} alt="blog-1" />
                      <span>May 25, 2021</span>
                      <p>Reciprocity, the new experiment in crypto — part 1</p>
                    </div>
                  </div>
                  <div className="blog-box container">
                    <div className="d-flex flex-column">
                      <img src={Blog3Img} alt="blog-1" />
                      <span>August 20, 2021</span>
                      <p>
                        DogeGF is rewarding internet creators with kind gestures
                      </p>
                    </div>
                  </div>
                  <div className="blog-box container">
                    <div className="d-flex flex-column">
                      <img src={Blog3Img} alt="blog-1" />
                      <span>August 20, 2021</span>
                      <p>
                        DogeGF is rewarding internet creators with kind gestures
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div id="art" className="container-fluid">
          <div className="art-container container-fluid px-0">
            <div className="d-flex flex-column align-items-lg-center">
              <label className="section-label">
                Curated by the Dogegf Team
              </label>
              <h2 className="section-title">Community Art</h2>
              <div className="container px-0 px-lg-5">
                <Slider
                  className="d-lg-none"
                  {...{
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    nextArrow: <SliderArrow type="art" direction="next" />,
                    prevArrow: <SliderArrow type="art" direction="prev" />,
                  }}
                >
                  <div className="art-box container">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <img className="w-100 h-100" src={Art1Img} alt="art-1" />
                    </div>
                  </div>
                  <div className="art-box container">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <img className="w-100 h-100" src={Art2Img} alt="art-2" />
                    </div>
                  </div>
                  <div className="art-box container">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <img className="w-100 h-100" src={Art3Img} alt="art-3" />
                    </div>
                  </div>
                  <div className="art-box container">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <img className="w-100 h-100" src={Art4Img} alt="art-4" />
                    </div>
                  </div>
                  <div className="art-box container">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <img className="w-100 h-100" src={Art5Img} alt="art-5" />
                    </div>
                  </div>
                  <div className="art-box container">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <img className="w-100 h-100" src={Art6Img} alt="art-6" />
                    </div>
                  </div>
                  <div className="art-box container">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <img className="w-100 h-100" src={Art7Img} alt="art-7" />
                    </div>
                  </div>
                  <div className="art-box container">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <img className="w-100 h-100" src={Art8Img} alt="art-8" />
                    </div>
                  </div>
                </Slider>

                <div className="art-lg-container container d-none d-lg-block">
                  <div className="row justify-content-center">
                    <div
                      className="col col-art-1 px-0"
                      data-bs-toggle="modal"
                      data-bs-target="#artModal"
                    >
                      <img src={Art1Img} alt="art-1" />
                    </div>
                  </div>
                </div>

                <div className="modal fade" id="artModal">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                      <div className="modal-body p-0">
                        <Slider
                          {...{
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: true,
                            nextArrow: (
                              <SliderArrow type="art-modal" direction="next" />
                            ),
                            prevArrow: (
                              <SliderArrow type="art-modal" direction="prev" />
                            ),
                          }}
                        >
                          <div className="art-box container px-0">
                            <div className="d-flex align-items-center justify-content-center h-100">
                              <img
                                className="w-100 h-100"
                                src={Art1Img}
                                alt="art-1"
                              />
                            </div>
                          </div>
                          <div className="art-box container px-0">
                            <div className="d-flex align-items-center justify-content-center h-100">
                              <img
                                className="w-100 h-100"
                                src={Art2Img}
                                alt="art-2"
                              />
                            </div>
                          </div>
                          <div className="art-box container px-0">
                            <div className="d-flex align-items-center justify-content-center h-100">
                              <img
                                className="w-100 h-100"
                                src={Art3Img}
                                alt="art-3"
                              />
                            </div>
                          </div>
                          <div className="art-box container px-0">
                            <div className="d-flex align-items-center justify-content-center h-100">
                              <img
                                className="w-100 h-100"
                                src={Art4Img}
                                alt="art-4"
                              />
                            </div>
                          </div>
                          <div className="art-box container px-0">
                            <div className="d-flex align-items-center justify-content-center h-100">
                              <img
                                className="w-100 h-100"
                                src={Art5Img}
                                alt="art-5"
                              />
                            </div>
                          </div>
                          <div className="art-box container px-0">
                            <div className="d-flex align-items-center justify-content-center h-100">
                              <img
                                className="w-100 h-100"
                                src={Art6Img}
                                alt="art-6"
                              />
                            </div>
                          </div>
                          <div className="art-box container px-0">
                            <div className="d-flex align-items-center justify-content-center h-100">
                              <img
                                className="w-100 h-100"
                                src={Art7Img}
                                alt="art-7"
                              />
                            </div>
                          </div>
                          <div className="art-box container px-0">
                            <div className="d-flex align-items-center justify-content-center h-100">
                              <img
                                className="w-100 h-100"
                                src={Art8Img}
                                alt="art-8"
                              />
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="vaults" className="container-fluid">
          <div className="vaults-container container-fluid">
            <div className="d-flex flex-column align-items-lg-center">
              <label className="section-label">Coming soon</label>
              <h2 className="section-title">DogeGF vaults</h2>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-6 px-0">
                    <div className="panel-text container-fluid px-0 h-lg-100 ms-0 ms-lg-auto">
                      <div className="d-flex flex-column justify-content-lg-center h-lg-100">
                        <h3 className="vaults-title">
                          Get rewards for providing liquidity
                        </h3>
                        <p className="vaults-description">
                          Facere dapibus nullam, exercitationem, vitae! Suscipit
                          aliquet fringilla vestibulum ornare, asperiores.
                          Condimentum? Officiis suscipit, id praesent dolorum
                          iure
                        </p>
                        <button className="btn btn-primary text-uppercase bg-white">
                          Coming Soon
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-0">
                    <img
                      className="browser-img w-100"
                      src={BrowserImg}
                      alt="dogegf-vaults-browser"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="faq" className="container-fluid px-lg-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-6 px-0">
                <div className="panel-description container-fluid px-0">
                  <div className="d-flex flex-column">
                    <label className="section-label">Knowledge Base</label>
                    <h2 className="section-title">
                      Frequently asked questions.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 px-0">
                <div className="panel-faq container-fluid px-0 px-lg-5">
                  <ul className="list-unstyled">
                    {FAQS.map((faq) => (
                      <li key={faq.id}>
                        <div
                          className="question-box d-flex align-items-center"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq-answer-${faq.id}`}
                        >
                          {faq.id === selectedFaqId && (
                            <i className="bi bi-dash fs-3" />
                          )}
                          {faq.id !== selectedFaqId && (
                            <i className="bi bi-plus fs-3" />
                          )}
                          <span>{faq.question}</span>
                        </div>
                        <div
                          className="collapse"
                          id={`faq-answer-${faq.id}`}
                          data-faq-id={faq.id}
                        >
                          <p>{faq.answer}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" className="container-fluid px-3 px-sm-5">
        <div className="footer-content container-fluid">
          <div className="row justify-content-around">
            <div className="col-12 col-lg-4 order-lg-1 px-0">
              <div className="panel-email d-flex justify-content-center align-items-center mb-lg-0">
                Contact us: dogegf@dogegf.com
              </div>
            </div>
            <div className="col-12 col-lg-4 order-lg-3 px-0">
              <div className="panel-social d-flex align-items-center justify-content-center mb-lg-0">
                <a
                  href="https://twitter.com/dogegftoken"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="https://discord.com/invite/EwKuFDCA5V"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <DiscordIcon />
                </a>
                <a
                  href="https://t.me/DogeGF_Official"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <TelegramIcon />
                </a>
                <a
                  href="https://dogegf.medium.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <MediumIcon />
                </a>
                <a
                  href="https://www.reddit.com/r/dogegf/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <RedditIcon />
                </a>
                <a
                  href="https://www.instagram.com/dogegf/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.tiktok.com/@dogegf"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <TiktokIcon />
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 order-lg-2 px-0">
              <div className="panel-copyright d-flex justify-content-center align-items-center h-100">
                All Rights Reserved © DogeGF
              </div>
            </div>
          </div>
          <button
            className="btn btn-outline-dark p-0"
            onClick={handleClickScrollTop}
          >
            <i className="bi bi-arrow-up fs-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
