import dashboardIcon from "../assets/icons/menu-icons/dashboard.svg";
import { FaUsers } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { BiSolidContact } from "react-icons/bi";
import { GiPoliceOfficerHead } from "react-icons/gi";

const SIDEBAR_ROUTES = [
  {
    path: "./",
    name: "Dashboard",
    icon: <CgMenuGridR />,
  },
  // {
  //   path: "./",
  //   name: "Customers",
  //   icon: <FaUsers />,
  // },
  {
    path: "/inspection-officers",
    name: "Officers",
    icon: <GiPoliceOfficerHead />,
  },
  {
    path: "./",
    name: "Total Inspections",
    icon: <FaUsers />,
  },
  {
    path: "./",
    name: "Contact Us",
    icon: <BiSolidContact />,
  },
];

export default SIDEBAR_ROUTES;
