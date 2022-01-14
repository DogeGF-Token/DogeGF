import {
  TwitterIcon,
  DiscordIcon,
  TelegramIcon,
  MediumIcon,
  RedditIcon,
  InstagramIcon,
  TiktokIcon,
  GithubIcon,
  EtherscanIcon,
  PolygonIcon,
  CoingeckoIcon,
  CoinmarketcapIcon,
} from "./components";

export const CONTENTFUL_SPACE_ID = "um4jhlnkf8hs";
export const CONTENTFUL_ACCESS_TOKEN =
  "Ol_t5-inzHvjFaZKfzsvmeQRJgY_3nwe15wydxg_Kj4";

export { default as LogoImg } from "assets/images/logo.png";
export { default as PhoneImg } from "assets/images/phone.png";
export { default as DollarImg } from "assets/images/tokenomics/dollar.png";
export { default as LockImg } from "assets/images/tokenomics/lock.png";
export { default as TotalImg } from "assets/images/tokenomics/total.png";
export { default as AdImg } from "assets/images/tokenomics/ad.png";
export { default as BurnImg } from "assets/images/tokenomics/burn.png";
export { default as TeamImg } from "assets/images/tokenomics/team.png";
export { default as BrowserImg } from "assets/images/browser.png";
export { default as RocketmanImg } from "assets/images/rocketman.png";
export { default as CopyImg } from "assets/icons/copy-link.png";
export { default as AuditImg } from "assets/images/audit.png";
export { default as EtherscanImg } from "assets/icons/etherscan.png";
export { default as PolygonImg } from "assets/icons/polygon.png";
export { default as CoingeckoImg } from "assets/icons/coingecko.png";
export { default as CoinmarketcapImg } from "assets/icons/coinmarketcap.png";
export { default as GithubImg } from "assets/icons/github.png";
export { default as DiscordImg } from "assets/icons/discord.png";
export { default as TwitterImg } from "assets/icons/twitter.png";
export { default as TelegramImg } from "assets/icons/telegram.png";
export { default as MediumImg } from "assets/icons/medium.png";
export { default as RedditImg } from "assets/icons/reddit.png";
export { default as InstagramImg } from "assets/icons/instagram.png";
export { default as TiktokImg } from "assets/icons/tiktok.png";

export const HEADER_LINKS = [
  {
    menu: "About",
    link: "#about",
  },
  {
    menu: "How to Buy",
    link: "#how-to-buy",
  },
  {
    menu: "Roadmap",
    link: "#roadmap",
  },
  {
    menu: "Tokenomics",
    link: "#tokenomics",
  },
  {
    menu: "Blog",
    link: "#blog",
  },
  {
    menu: "Art",
    link: "#art",
  },
  {
    menu: "DogeGF Vaults",
    link: "#vaults",
  },
  {
    menu: "Faq",
    link: "#faq",
  },
];

export const FOOTER_LINKS = [
  {
    link: "https://twitter.com/dogegftoken",
    children: <TwitterIcon />,
    target: "_blank",
  },
  {
    link: "https://discord.com/invite/EwKuFDCA5V",
    children: <DiscordIcon />,
    target: "_blank",
  },
  {
    link: "https://t.me/DogeGF_Official",
    children: <TelegramIcon />,
    target: "_blank",
  },
  {
    link: "https://dogegf.medium.com/",
    children: <MediumIcon />,
    target: "_blank",
  },
  {
    link: "https://www.reddit.com/r/dogegf/",
    children: <RedditIcon />,
    target: "_blank",
  },
  {
    link: "https://www.instagram.com/dogegf/",
    children: <InstagramIcon />,
    target: "_blank",
  },
  {
    link: "https://www.tiktok.com/@dogegf",
    children: <TiktokIcon />,
    target: "_blank",
  },
  {
    link: "https://etherscan.io/address/0xfb130d93e49dca13264344966a611dc79a456bc5",
    children: <EtherscanIcon />,
    target: "_blank",
  },
  {
    link: "https://polygonscan.com/token/0x0e7252706393470ffb0629da2caa39fc9340f2d4",
    children: <PolygonIcon />,
    target: "_blank",
  },
  {
    link: "https://www.coingecko.com/en/coins/dogegf",
    children: <CoingeckoIcon />,
    target: "_blank",
  },
  {
    link: "https://coinmarketcap.com/currencies/dogegf/",
    children: <CoinmarketcapIcon />,
    target: "_blank",
  },
  {
    link: "https://github.com/DogeGF-Token/DogeGF",
    children: <GithubIcon />,
    target: "_blank",
  },
];

export const ROADMAP_PHASES = [
  {
    title: "Phase 1",
    season: "Q2 2021",
    items: [
      {
        label: "Website launch",
        completed: true,
      },
      {
        label: "Token launch",
        completed: true,
      },
      {
        label: "Community giveaways and contests",
        completed: true,
      },
    ],
  },
  {
    title: "Phase 2",
    season: "Q3 2021",
    items: [
      {
        label: "Groundwork for strong community",
        completed: true,
      },
      {
        label: "Coingecko & Coinmarketcap listings",
        completed: true,
      },
      {
        label: "Community Events",
        completed: true,
      },
      {
        label: "First 1000 holders",
        completed: true,
      },
    ],
  },
  {
    title: "Phase 3",
    season: "Q4 2021",
    items: [
      {
        label: "Grow the team",
        completed: true,
      },
      {
        label: "Contract audit",
        completed: true,
      },
      {
        label: "Community events",
        completed: true,
      },
      {
        label: "Burn event",
        completed: true,
      },
      {
        label: "Rebranding",
        completed: true,
      },
      {
        label: "Polygon",
        completed: true,
      },
      {
        label: "First 5000 holders",
        completed: true,
      },
    ],
  },
  {
    title: "Phase 4",
    season: "Q1 2022",
    items: [
      {
        label: "DogeGF reward platform for kind gestures",
        completed: false,
      },
      {
        label: "DogeGF staking vaults",
        completed: false,
      },
      {
        label: "Community events",
        completed: false,
      },
      {
        label: "Burn events",
        completed: false,
      },
      {
        label: "First 100.000 holders",
        completed: false,
      },
      {
        label: "Build, build, build",
        completed: false,
      },
    ],
  },
];

export const BLOGS = [
  {
    title: "Meet DogeGF, the peer-to-peer coin of the new reciprocal society.",
    date: "May 25",
    img: require("assets/images/blogs/blog1.png").default,
    link: "https://dogegf.medium.com/meet-dogegf-the-peer-to-peer-coin-of-the-new-reciprocal-society-463b7c9ab238",
  },
  {
    title: "Reciprocity, the new experiment in crypto — part 1.",
    date: "Jun 20",
    img: require("assets/images/blogs/blog2.png").default,
    link: "https://dogegf.medium.com/reciprocity-the-new-experiment-in-crypto-part-1-e6da618aefa6",
  },
  {
    title: "DogeGF is rewarding internet creators with kind gestures",
    date: "Aug 20",
    img: require("assets/images/blogs/blog3.png").default,
    link: "https://dogegf.medium.com/dogegf-is-rewarding-internet-creators-with-kind-gestures-ad5bc1f893c4",
  },
  {
    title: "DogeGF, the start of a new, true & kind crypto community",
    date: "Sep 26",
    img: require("assets/images/blogs/blog4.png").default,
    link: "https://dogegf.medium.com/dogegf-the-start-of-a-new-true-kind-crypto-community-46a6e48a87ec",
  },
  {
    title: "Burn announcement",
    date: "Oct 13",
    img: require("assets/images/blogs/blog6.png").default,
    link: "https://dogegf.medium.com/dogegf-burn-announcement-988a53621a25",
  },
  {
    title: "Wallets Holding Locked DogeGF - Tokens Update",
    date: "Nov 22",
    img: require("assets/images/blogs/blog5.png").default,
    link: "https://dogegf.medium.com/wallets-holding-locked-dogegf-tokens-update-7d51565b4005",
  },
  {
    title: "Polygon",
    date: "Dec 30",
    img: require("assets/images/blogs/blog7.png").default,
    link: "https://dogegf.medium.com/we-are-happy-to-announce-that-dogegf-is-now-available-to-trade-on-polygon-network-c853c394a72a",
  },
];
