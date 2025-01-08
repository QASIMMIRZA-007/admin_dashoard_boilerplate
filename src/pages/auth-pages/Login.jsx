import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/slices/authSlice";
import { usePostApi } from "../../hooks/api";
import PrimaryButton from "../../components/UI/PrimaryButton";
import { message, Spin } from "antd";
import styles from "./Login.module.scss";
import { ReactSVG } from "react-svg";
import { logo } from "../../assets";
import axios from "axios";
import { BASE_URL } from "../../config/api";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    role: "admin",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    role: "admin",
  });
  const { handleMutation, isLoading } = usePostApi();

  const validateForm = () => {
    let valid = true;
    let errors = { email: "", password: "", role: "admin" };

    if (!formValues.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    if (!formValues.password) {
      errors.password = "Password is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const onSubmitLogin = async () => {
    if (validateForm()) {
      // handleMutation(
      //   {
      //     path: `auth/login`,
      //     data: formValues,
      //   },
      //   navigate("/admin/dashboard"),
      //   (res) => {
      //     console.log(res, "response from login api");
      //     dispatch(
      //       login({
      //         user: res.user,
      //         token: res.tokens.access.token,
      //         refreshToken: res.tokens.refresh.token,
      //         tokenExpiry: res.tokens.access.expires,
      //         refreshTokenExpiry: res.tokens.refresh.expires,
      //       })
      //     );
      //     message.success("Login successful");
      //   }
      // );
      try {
        const response = await axios.post(`${BASE_URL}auth/login`, formValues);

        if (response.status === 200) {
          const res = response.data;
          navigate("/admin");
          console.log(res, "response from login API");

          // dispatch(
          //   login({
          //     // user: res?.user,
          //     // token: res?.token,
          //     // refreshToken: res.tokens.refresh.token,
          //     // tokenExpiry: res.tokens.access.expires,
          //     // refreshTokenExpiry: res.tokens.refresh.expires,
          //   })
          // );
          // message.success("Login successful");
        } else {
          message.error("An unexpected error occurred");
        }
      } catch (error) {
        console.error("Error during API call:", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const onForgotPassword = () => {
    navigate("/admin/forgot-password");
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <div>
          <ReactSVG src={logo} className={styles.adminLogo} />
        </div>
        <div className={styles.loginMainContainer}>
          <h2>Admin Login</h2>
          <div className={styles.loginInputs}>
            <input
              onChange={handleInputChange}
              type="email"
              placeholder="Email address"
              name="email"
              value={formValues.email}
              autoComplete="email"
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
            <input
              onChange={handleInputChange}
              type="password"
              placeholder="Password"
              name="password"
              value={formValues.password}
            />
            {errors.password && (
              <span className={styles.error}>{errors.password}</span>
            )}
            <h4 onClick={onForgotPassword}>Forgot password?</h4>
          </div>
          <PrimaryButton onClick={onSubmitLogin} className={styles.loginButton}>
            {isLoading ? <Spin spinning={true} size="small" /> : "Login"}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
