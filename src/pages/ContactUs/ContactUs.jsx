import { Table } from "antd";
import React from "react";
import { FaRegEye } from "react-icons/fa";

const columns = [
  {
    title: "Contact ID",
    dataIndex: "contactId",
    key: "contactId",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "message",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (_, record) => (
      <a onClick={() => console.log(`Responding to ${record.contactId}`)}>
        <FaRegEye style={{ color: "#000", fontSize: "20px" }} />
      </a>
    ),
  },
];

const contactData = [
  {
    key: "1",
    contactId: "C001",
    name: "Alice Brown",
    email: "alice.brown@example.com",
    phone: "+1234567890",
    message: "I need help with my order.",
    date: "2025-01-08",
  },
  {
    key: "2",
    contactId: "C002",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1987654321",
    message: "Can you provide more details about your services?",
    date: "2025-01-07",
  },
  {
    key: "3",
    contactId: "C003",
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    phone: "+1122334455",
    message: "How do I reset my password?",
    date: "2025-01-06",
  },
];

const ContactUs = () => {
  return (
    <div>
      <h3 className="sectionHeading"> Contact Us</h3>
      <Table columns={columns} dataSource={contactData} bordered />
    </div>
  );
};

export default ContactUs;
