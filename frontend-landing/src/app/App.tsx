import Slider from "react-slick";
import { useArt, useFaq, useTooltip } from "./hooks";
import { SliderArrow, CopyIcon } from "./components";
import {
  PhoneImg,
  DollarImg,
  LockImg,
  TotalImg,
  AdImg,
  BurnImg,
  TeamImg,
  BrowserImg,
  RocketmanImg,
  ROADMAP_PHASES,
  BLOGS,
  AuditImg,
} from "./constants";

import RoadmapPhase from "./components/Landing/RoadmapPhase";
import Blog from "./components/Landing/Blog";
import Art from "./components/Landing/Art";
import Faq from "./components/Landing/Faq";
import NavBar from "./components/Landing/NavBar";
import Footer from "./components/Landing/Footer";
import Tokenomics, { TokenomicsData } from "./components/Landing/Tokenomics";

function App() {
  const tokenomics: TokenomicsData[] = [
    { img: DollarImg, title: "Token Symbol", description: "$DOGEGF" },
    {
      img: LockImg,
      title: "Locked Liquidity in Uniswap & Sushiswap",
      description: "25%",
    },
    {
      img: TotalImg,
      title: "Total Supply",
      description: "69,420,000,000,000,000",
    },
    {
      img: AdImg,
      title: "Marketing & Community (50% Locked)",
      description: "15%",
    },
    { img: BurnImg, title: "Burned Supply", description: "50%" },
    { img: TeamImg, title: "Team Wallet (Locked)", description: "10%" },
  ];
  const contractAddress = "0xfb130d93e49dca13264344966a611dc79a456bc5";
  const [arts, , setCurrentArtIndex, artMSlider, artDSlider] = useArt([]);
  const [faqs] = useFaq([], "");
  const [setTitle] = useTooltip("Copy to Clipboard");

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
  };

  return (
    <div>
      <NavBar />

      <div id="content" className="container-xxl px-0">
        <div id="home" className="container-fluid">
          <div className="home-container container-fluid p-lg-0 h-100">
            <div className="container-fluid h-100">
              <div className="row h-100">
                <div className="col col-lg-7 px-0">
                  <div className="panel-text container h-100 p-0 ms-0 ms-lg-5 ms-xxl-auto me-lg-0">
                    <div className="d-flex flex-column justify-content-lg-center h-75">
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
                    <h2 className="section-title mb-0">How to buy $DOGEGF</h2>
                    <p className="my-4 ms-0 step-description">
                      $DOGEGF is now available for trading on the Polygon
                      network where there are lower transactions fees. For
                      purchasing on the Polygon network follow the steps from
                      this{" "}
                      <a
                        href="https://dogegf.medium.com/we-are-happy-to-announce-that-dogegf-is-now-available-to-trade-on-polygon-network-c853c394a72a"
                        target="_blank"
                        rel="noreferrer"
                      >
                        article
                      </a>
                      . For purchasing on the Ethereum network follow the steps
                      below.
                    </p>
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
                          wallets. On Google Chrome, visit{" "}
                          <a
                            href="https://metamask.io/"
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            metamask.io
                          </a>{" "}
                          to download the extension and set up a wallet. On
                          mobile? Get MetaMask's app for{" "}
                          <a
                            href="https://metamask.app.link/skAH3BaF99"
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            iPhone
                          </a>{" "}
                          or{" "}
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
                          You can currently buy $DOGEGF on{" "}
                          <a
                            href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xfb130d93e49dca13264344966a611dc79a456bc5"
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            Uniswap
                          </a>{" "}
                          or{" "}
                          <a
                            href="https://app.sushi.com/swap?inputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&outputCurrency=0xfb130d93e49dca13264344966a611dc79a456bc5"
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            Sushiswap
                          </a>
                          . Be carefull to use only and only this contract
                          address: {contractAddress}
                          <span id="tooltipContent">
                            <CopyIcon
                              styles={{ marginLeft: "5px", cursor: "pointer" }}
                              onClick={() => copyAddress()}
                              width={15}
                              height={15}
                            />
                          </span>
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
                          your transaction. Gas prices can be checked on{" "}
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
                {ROADMAP_PHASES.map((phase, index) => (
                  <RoadmapPhase
                    key={index}
                    title={phase.title}
                    season={phase.season}
                    items={phase.items}
                  />
                ))}
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
                {tokenomics.map((tokenomic, index) => (
                  <Tokenomics
                    key={index}
                    index={index}
                    img={tokenomic.img}
                    title={tokenomic.title}
                    description={tokenomic.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          id="tokenomics"
          className="container-fluid px-lg-0 ms-0 ms-lg-auto"
        >
          <div className="d-flex flex-column align-items-center">
            <label className="section-label">Trust</label>
            <div className="container-fluid px-0">
              <div className="tokenomics-list row d-flex justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 px-0">
                  <div className="tokenomic-box container-fluid">
                    <div className="d-flex align-items-center flex-lg-wrap">
                      <div className="tokenomic-icon tokenomic-icon-1 flex-shrink-0 d-flex align-items-center justify-content-center">
                        <img src={AuditImg} alt="tokenomic-team" />
                      </div>
                      <div className="flex-grow-1 d-flex flex-column w-lg-100">
                        <h3 className="tokenomic-title">Audit</h3>
                        <span className="tokenomic-description">
                          The DogeGF contract has been audited by Solidity
                          finance.
                          <a
                            href="https://solidity.finance/audits/DogeGF/"
                            target="_blank"
                            className="btn-view ms-3"
                            rel="noreferrer"
                          >
                            View
                          </a>
                        </span>
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
                  {BLOGS.map((blog, index) => (
                    <Blog
                      key={index}
                      title={blog.title}
                      date={blog.date}
                      img={blog.img}
                      link={blog.link}
                    />
                  ))}
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
              <div className="container-fluid px-0 px-lg-5">
                <Slider
                  ref={artMSlider}
                  className="d-lg-none"
                  {...{
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    nextArrow: <SliderArrow type="art" direction="next" />,
                    prevArrow: <SliderArrow type="art" direction="prev" />,
                    beforeChange: (current, next) => setCurrentArtIndex(next),
                  }}
                >
                  {arts.map((art: any, index: number) => (
                    <Art
                      key={index}
                      index={index}
                      art={art}
                      clickable={false}
                      onClick={() => null}
                    />
                  ))}
                </Slider>

                <div className="art-lg-container container-fluid d-none d-lg-block">
                  <div className="row justify-content-center">
                    {arts.map((art: any, index: number) => (
                      <Art
                        key={index}
                        art={art}
                        index={index}
                        clickable={true}
                        onClick={() => setCurrentArtIndex(index)}
                      />
                    ))}
                  </div>
                </div>

                <div className="modal fade" id="artModal">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                      <div className="modal-body p-0">
                        <Slider
                          ref={artDSlider}
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
                            beforeChange: (current, next) =>
                              setCurrentArtIndex(next),
                          }}
                        >
                          {arts.map((art: any, index: number) => (
                            <div key={index} className="art-box">
                              <img
                                className="w-100 h-100"
                                src={art.image.url}
                                alt={`art-${index}`}
                              />
                            </div>
                          ))}
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
                    {faqs.map((faq: any, index: number) => (
                      <Faq key={index} faq={faq} index={index} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
