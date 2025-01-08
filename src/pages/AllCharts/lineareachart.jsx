import React, { Component } from "react";
import ChartistGraph from "react-chartist";

class LineAreaChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Dummy data for testing
    const dummyData = [
      { month: "January", earning: 500 },
      { month: "February", earning: 700 },
      { month: "March", earning: 800 },
      { month: "April", earning: 650 },
      { month: "May", earning: 900 },
    ];

    // Processed data for the chart
    const lineChartData = {
      labels: dummyData.map((el) => el.month),
      series: [dummyData.map((el) => el.earning)],
    };

    // Chart options
    const lineChartOptions = {
      low: 0,
      showArea: true,
    };

    return (
      <React.Fragment>
        <ChartistGraph
          data={lineChartData}
          style={{ height: "300px" }}
          options={lineChartOptions}
          type={"Line"}
        />
      </React.Fragment>
    );
  }
}

export default LineAreaChart;
