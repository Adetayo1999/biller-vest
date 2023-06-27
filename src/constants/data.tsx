import { FooterListI } from "@/types";
import CardIcon from "@/components/icons/CardIcon";
import CubeIcon from "@/components/icons/CubeIcon";
import ForbiddenIcon from "@/components/icons/ForbiddenIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import MonitorIcon from "@/components/icons/MonitorIcon";
import SquareIcon from "@/components/icons/SquareIcon";
import MoneyBagIcon from "@/components/icons/MoneyBag";
import InfoIcon from "@/components/icons/InfoIcon";

// coins
import NFT from "@/assets/images/coins/nft.png";
import BTC from "@/assets/images/coins/btc.png";
import ETH from "@/assets/images/coins/eth.png";
import BNB from "@/assets/images/coins/bnb.png";
import SOL from "@/assets/images/coins/sol.png";
import USD from "@/assets/images/coins/usd.png";
import ADA from "@/assets/images/coins/cardano.png";
import Monero from "@/assets/images/coins/monero.png";
import TRX from "@/assets/images/coins/trx.png";
import XTZ from "@/assets/images/coins/xtz.png";
import ATOM from "@/assets/images/coins/atom.png";
import Wallet from "@/assets/images/coins/wallet.png";
import Tether from "@/assets/images/coins/tether.png";
import BillerVest from "@/assets/images/coins/BillerVest-coin.png";

// support
import Location from "@/assets/images/support/location.png";
import Contact from "@/assets/images/support/contact.png";
import TOS from "@/assets/images/support/tos.png";
import Privacy from "@/assets/images/support/policy.png";
import BillerPay from "@/assets/images/support/BillerPay.png";

// socials
import Facebook from "@/assets/images/socials/facebook.png";
import Instagram from "@/assets/images/socials/instagrams.png";
import Twitter from "@/assets/images/socials/twitter.png";
import LinkedIn from "@/assets/images/socials/linkedIn.png";
import ChartIcon from "@/components/icons/ChartIcon";


export const subNav = [
  {
    title: "Security",
    icon: <ForbiddenIcon />,
  },
  {
    title: "Buy/Sell",
    icon: <CardIcon />,
  },
  {
    title: "Swaps",
    icon: <SquareIcon />,
  },
  {
    title: "Assets",
    icon: <SquareIcon />,
  },
  {
    title: "For you",
    icon: <HeartIcon />,
  },
  {
    title: "Desktop",
    icon: <MonitorIcon />,
  },
  {
    title: "dApps",
    icon: <CubeIcon />,
  },
];

export const nftSubNav = [
  {
    title: "How is works",
    icon: <CardIcon />,
  },
  {
    title: "Collect",
    icon: <SquareIcon />,
  },
  {
    title: "Send",
    icon: <ChartIcon />,
  },
  {
    title: "Store",
    icon: <HeartIcon />,
  },
  {
    title: "Buy/Sell",
    icon: <MonitorIcon />,
  },

  {
    title: "Value of NFT",
    icon: <CubeIcon />,
  },
  
];

export const walletSubNav = [
  {
    title: "How is works",
    icon: <CardIcon />,
  },
  {
    title: "Buy",
    icon: <SquareIcon />,
  },
  {
    title: "Exchange",
    icon: <ChartIcon />,
  },
  {
    title: "Price Chart",
    icon: <HeartIcon />,
  },
 

  {
    title: "BTC",
    icon: <CubeIcon />,
  },
];

export const stakingSubNav = [
  {
    title: "Benefits",
    icon: <CardIcon />,
  },
  {
    title: "How to earn",
    icon: <MoneyBagIcon />,
  },
  {
    title: "Value of staking",
    icon: <InfoIcon />,
  },
];

export const walletList: FooterListI[] = [
  {
    title: "NFTs",
    image: NFT,
  },
  {
    title: "Bitcoin Wallet",
    image: BTC,
  },
  {
    title: "Ethereum Wallet",
    image: ETH,
  },
  {
    title: "Binance Coin Wallet",
    image: BNB,
  },
  {
    title: "Tether Wallet",
    image: Tether,
  },
  {
    title: "Solana Wallet",
    image: SOL,
  },
  {
    title: "USD Coin Wallet",
    image: USD,
  },
  {
    title: "Cardano Wallet",
    image: ADA,
  },
  {
    title: "Monero Wallet",
    image: Monero,
  },
  {
    title: "All Wallets",
    image: Wallet,
  },
];

export const stakingList: FooterListI[] = [
  {
    title: "Staking BNB",
    image: BNB,
  },
  {
    title: "Staking BillerVest",
    image: BillerVest,
  },
  {
    title: "Staking TRX",
    image: TRX,
  },
  {
    title: "Staking ATOM",
    image: ATOM,
  },
  {
    title: "Staking SOL",
    image: SOL,
  },
  {
    title: "Staking XTZ",
    image: XTZ,
  },
  {
    title: "Staking ADA",
    image: ADA,
  },
];

export const supportList: FooterListI[] = [
  {
    title: "Help Centre",
    image: Location,
  },
  {
    title: "Contact Us",
    image: Contact,
  },
  {
    title: "Terms of Service ",
    image: TOS,
  },
  {
    title: "Privacy Policy",
    image: Privacy,
  },
];

export const socialsList: FooterListI[] = [
  {
    title: "Facebook",
    image: Facebook,
  },
  {
    title: "Instagram",
    image: Instagram,
  },
  {
    title: "Twitter",
    image: Twitter,
  },
  {
    title: "LinekedIn",
    image: LinkedIn,
  },
];

export const billervest: FooterListI[] = [
  {
    title: "BillerPay",
    image: BillerPay,
  },
];
