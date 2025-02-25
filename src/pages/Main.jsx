import "./Main.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Login from "./auth-pages/Login";
import ForgotPassword from "./auth-pages/ForgotPassword";
import ResetPassword from "./auth-pages/ResetPassword";
import Page404 from "./Page404";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Profile/Profile";
import { useSelector } from "react-redux";
import InspectionOfficers from "./InspectionOfficers/InspectionOfficers";
import TotalInspections from "./TotalInspections/TotalInspections";
import ContactUs from "./ContactUs/ContactUs";

const Main = ({ navigation }) => {
  // const isLoggedIn = true;
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  console.log("isLoggedIn", isLoggedIn);
  // const isLoggedIn = false;

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Login />} />
      </Routes>
    );
  }

  return (
    <Layout navigation={navigation}>
      <Routes>
        <Route path="//dashboard" element={<Dashboard />} />
        <Route path="/inspection-officers" element={<InspectionOfficers />} />
        <Route path="/total-inspections" element={<TotalInspections />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
};

export default Main;
