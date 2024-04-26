import { MdFeed } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

export const menu = [
  {
    link: "/feed",
    title: "Feed",
    icon: MdFeed,
  },
  {
    link: "/analytics",
    title: "Analytics",
    icon: SiGoogleanalytics,
  },
  {
    link: "/monetization",
    title: "Monetization",
    icon: FaMoneyBillTrendUp,
  },
];

export const menuDAO = [
  {
    link: "/overview",
    title: "Overview",
    icon: MdFeed,
  },
  {
    link: "/proposals",
    title: "Proposals",
    icon: SiGoogleanalytics,
  },
  {
    link: "/treasury",
    title: "Treasury",
    icon: FaMoneyBillTrendUp,
  },
  {
    link: "/voting",
    title: "Voting",
    icon: CgProfile,
  },
];
