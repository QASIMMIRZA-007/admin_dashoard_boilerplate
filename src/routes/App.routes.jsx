import React from "react";
import InspectionOfficers from "../pages/InspectionOfficers/InspectionOfficers";
import TotalInspections from "../pages/TotalInspections/TotalInspections";
import Dashboard from "../pages/Dashboard/Dashboard";

const APP_ROUTES = [
  {
    path: "./dashboard",
    children: <Dashboard />,
    title: "Dashboard",
  },
  {
    path: "/inspection-officers",
    children: <InspectionOfficers />,
    title: "Inspection Officers",
  },
  {
    path: "/total-inspections",
    children: <TotalInspections />,
    title: "Total Inspections",
  },

  {
    path: "/profile",
    children: [],
    title: "Profile",
  },
];

export default APP_ROUTES;
