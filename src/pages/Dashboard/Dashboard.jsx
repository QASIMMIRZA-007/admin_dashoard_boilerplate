import React from "react";

import "./Dashboard.scss";
import CardsAndTransanctions from "../../components/MainPage/CardsAndTransanctions";
import Transanctions from "../../components/MainPage/Transanctions";
import ChartContainer from "../../components/MainPage/ChartContainer";
import LineAreaChart from "../AllCharts/lineareachart";
import LineBarAreaChart from "../AllCharts/LineBarAreaChart";
import InspectionsOfficerContainer from "../../components/MainPage/InspectionsOfficerContainer";

const ODERS_DATA = {
  heading: "Inspection Requests",
  chartData: [
    { day: "1 Apr", users: 2500 },
    { day: "2 Apr", users: 2200 },
    { day: "3 Apr", users: 200 },
    { day: "4 Apr", users: 2100 },
    { day: "5 Apr", users: 1900 },
    { day: "6 Apr", users: 800 },
    { day: "7 Apr", users: 2100 },
    { day: "8 Apr", users: 1900 },
    { day: "9 Apr" },
    { day: "10 Apr" },
    { day: "11 Apr" },
  ],
};

const USERS_DATA = {
  heading: "Inspection Officers",
  chartData: [
    { day: "1 Apr", users: 200 },
    { day: "2 Apr", users: 1600 },
    { day: "3 Apr", users: 2000 },
    { day: "4 Apr", users: 200 },
    { day: "5 Apr", users: 1000 },
    { day: "6 Apr", users: 800 },
    { day: "7 Apr", users: 2100 },
    { day: "8 Apr", users: 1900 },
    { day: "9 Apr" },
    { day: "10 Apr" },
    { day: "11 Apr" },
  ],
};

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="main-container">
        <CardsAndTransanctions />
        <Transanctions />
        {/* <LineAreaChart /> */}
        <ChartContainer data={ODERS_DATA} />
        <InspectionsOfficerContainer data={USERS_DATA} />
        {/* <ChartContainer data={USERS_DATA} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
