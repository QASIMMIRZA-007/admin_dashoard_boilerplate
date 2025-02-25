import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { logo, LogoutIcon } from "../../assets";
import "./Sidebar.scss";
import { usePostApi } from "../../hooks/api";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/slices/authSlice";
import { Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const Sidebar = ({ navigation }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isIndex = location.pathname === "/admin" || location.pathname === "/";

  const auth = useSelector((store) => store.auth);
  const { handleMutation, isLoading } = usePostApi();

  const renderRoutes = navigation.map((route) => {
    return (
      <NavLink
        key={route.name}
        to={route.path}
        className={route.name === "Dashboard" && isIndex ? "active" : ""}
      >
        <div className="menu-item">
          {/* <ReactSVG className="menu-icon" src={route.icon} /> */}
          {route.icon}
          {route.name}
        </div>
      </NavLink>
    );
  });

  const handleLogout = () => {
    // handleMutation(
    //   {
    //     path: "auth/logout",
    //     data: { refreshToken: auth.token },
    //   },
    //   (res) => {
    //     console.log(res);
    //     dispatch(logout());
    //     navigate("/admin");
    //   }
    // );
    dispatch(logout());
    toast.success(" successfully Logged out!", {
      autoClose: 1000,
    });
    navigate("/admin");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        {/* <h1>REACTADMIN</h1> */}
        <ReactSVG
          src={logo}
          onClick={() => navigate("/admin/dashboard")}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="sidebar-menu">{renderRoutes}</div>
      <Popconfirm
        title="Logout!"
        description="Are you sure you want to logout?"
        icon={
          <QuestionCircleOutlined
            style={{
              color: "red",
            }}
          />
        }
        onConfirm={handleLogout}
        okText="Logout!"
        okButtonProps={{ loading: isLoading }}
      >
        <button className="logout-button">
          <ReactSVG src={LogoutIcon} />
          Logout
        </button>
      </Popconfirm>
    </div>
  );
};

export default Sidebar;
