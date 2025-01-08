import React from "react";

import "./ChartContainer.scss";
import SecondaryButton from "../UI/SecondaryButton";
// import Chart from "../Common/Chart";
import { ReactSVG } from "react-svg";
import {
  FilterIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
} from "../../assets";
import CustomBarChart from "../../pages/AllCharts/CustomBarChart";
import LineBarAreaChart from "../../pages/AllCharts/LineBarAreaChart";

export const InspectionsOfficerContainer = ({ data }) => {
  return (
    <div className="chart-container">
      <div className="container-top">
        <h3>{data.heading}</h3>
        <div className="top-buttons">
          <ReactSVG src={FilterIcon} />
          <SecondaryButton className={"button-active"}>
            Last month
          </SecondaryButton>
          <SecondaryButton>Last 3 months</SecondaryButton>
          <SecondaryButton>Last 5 months</SecondaryButton>
        </div>
      </div>
      <div className="chart-main-wrapper">
        <div className="wrapper-main-top">
          <div className="top-date-changer">
            <ReactSVG src={ArrowLeftIcon} />
            <div className="date">
              <ReactSVG src={CalendarIcon} />
              20 - 27 Apr, 2023.
            </div>
            <ReactSVG src={ArrowRightIcon} />
          </div>
        </div>
        <div className="chart">
          <LineBarAreaChart />
          {/* <Chart data={data.chartData} /> */}
        </div>
      </div>
    </div>
  );
};

export default InspectionsOfficerContainer;
