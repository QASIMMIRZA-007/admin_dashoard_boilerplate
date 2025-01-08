import React from "react";
import { Table, Tag } from "antd";

const InspectionOfficers = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (status) => (
        <Tag color={status === "Paid" ? "green" : "red"}>{status}</Tag>
      ),
    },
  ];

  // Sample data
  const data = [
    {
      key: "1",
      id: "101",
      name: "John Doe",
      date: "2023-12-01",
      paymentStatus: "Paid",
    },
    {
      key: "2",
      id: "102",
      name: "Jane Smith",
      date: "2023-12-02",
      paymentStatus: "Unpaid",
    },
    {
      key: "3",
      id: "103",
      name: "Alice Johnson",
      date: "2023-12-03",
      paymentStatus: "Paid",
    },
    {
      key: "4",
      id: "104",
      name: "Bob Brown",
      date: "2023-12-04",
      paymentStatus: "Unpaid",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default InspectionOfficers;
