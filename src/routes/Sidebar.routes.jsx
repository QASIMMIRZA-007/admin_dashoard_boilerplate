import dashboardIcon from "../assets/icons/menu-icons/dashboard.svg";
import { FaUsers } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { BiSolidContact } from "react-icons/bi";
import { GiPoliceOfficerHead } from "react-icons/gi";

const SIDEBAR_ROUTES = [
  {
    path: "./dashboard",
    name: "Dashboard",
    icon: <CgMenuGridR />,
  },
  // {
  //   path: "./",
  //   name: "Customers",
  //   icon: <FaUsers />,
  // },
  {
    path: "./inspection-officers",
    name: "Inspection Officers",
    icon: <GiPoliceOfficerHead />,
  },
  {
    path: "./total-inspections",
    name: "Total Inspections",
    icon: <FaUsers />,
  },
  {
    path: "./contact-us",
    name: "Contact Us",
    icon: <BiSolidContact />,
  },
];

export default SIDEBAR_ROUTES;
