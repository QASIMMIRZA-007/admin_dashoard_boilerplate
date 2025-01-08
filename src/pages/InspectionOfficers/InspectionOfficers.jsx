import React from "react";
import { Table, Tag } from "antd";
import { FaRegEye } from "react-icons/fa";

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
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        // <Tag color={status === "Paid" ? "green" : "red"}>{status}</Tag>
        <FaRegEye
          style={{ color: "#000", fontSize: "20px", cursor: "pointer" }}
        />
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

  return (
    <>
      <h3 className="sectionHeading"> Inspection Officers</h3>
      <Table columns={columns} dataSource={data} bordered />;
    </>
  );
};

export default InspectionOfficers;
