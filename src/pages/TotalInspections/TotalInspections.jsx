import { Table, Modal } from "antd";
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";

const TotalInspections = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const columns = [
    {
      title: "Booking ID",
      dataIndex: "bookingId",
      key: "bookingId",
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "";
        switch (status) {
          case "Pending":
            color = "orange";
            break;
          case "Approved":
            color = "blue";
            break;
          case "In-progress":
            color = "purple";
            break;
          case "Complete":
            color = "green";
            break;
          default:
            color = "black";
        }
        return <span style={{ color }}>{status}</span>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <a
          onClick={() => {
            setSelectedBooking(record);
            setIsModalVisible(true);
          }}
        >
          <FaRegEye
            style={{ color: "#000", fontSize: "20px", cursor: "pointer" }}
          />
        </a>
      ),
    },
  ];

  const tableData = {
    pendingBookings: [
      {
        key: "1",
        bookingId: "B001",
        customerName: "John Doe",
        date: "2025-01-08",
        status: "Pending",
      },
      {
        key: "2",
        bookingId: "B002",
        customerName: "Jane Smith",
        date: "2025-01-09",
        status: "Pending",
      },
      {
        key: "3",
        bookingId: "B010",
        customerName: "Alyx Doe",
        date: "2025-01-09",
        status: "Approved",
      },
      {
        key: "4",
        bookingId: "B002",
        customerName: "Jane Smith",
        date: "2025-01-09",
        status: "In-progress",
      },
      {
        key: "5",
        bookingId: "B093",
        customerName: "Signh Sher",
        date: "2025-04-09",
        status: "Complete",
      },
    ],
  };

  return (
    <div>
      <h3 className="sectionHeading">Total Inspections</h3>
      <Table
        columns={columns}
        dataSource={tableData.pendingBookings}
        bordered
      />
      <Modal
        title="Booking Details"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        {selectedBooking && (
          <div>
            <p>
              <strong>Booking ID:</strong> {selectedBooking.bookingId}
            </p>
            <p>
              <strong>Customer Name:</strong> {selectedBooking.customerName}
            </p>
            <p>
              <strong>Date:</strong> {selectedBooking.date}
            </p>
            <p>
              <strong>Status:</strong> {selectedBooking.status}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TotalInspections;
