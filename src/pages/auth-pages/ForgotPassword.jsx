import React, { useState } from "react";
import PrimaryButton from "../../components/UI/PrimaryButton";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.scss";
import { usePostApi } from "../../hooks/api";
import { logo } from "../../assets";
import { ReactSVG } from "react-svg";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", role: "coach" });
  const [errors, setErrors] = useState({ email: "", role: "coach" });
  const { handleMutation, isLoading } = usePostApi();

  const validateForm = () => {
    let valid = true;
    let errors = { email: "", role: "coach" };

    if (!formValues.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitReset = () => {
    if (validateForm()) {
      handleMutation(
        {
          path: `auth/forgot-password-otp`,
          data: formValues,
        },
        (res) => {
          console.log(res, "response from forgot-password-otp API");
          navigate("/admin");
        }
      );
    }
  };

  return (
    <div className="main-forgot-password-container">
      <div className="forgot-password-container">
        {/* <ReactSVG src={logo} className="forgot-password-logo" alt="Logo" /> */}
        <h2>Forgot Password?</h2>
        <p>
          You'll receive a code on your email <span>example@gmail.com</span> to
          verify you are the owner.
        </p>
        <input
          type="email"
          placeholder="Email address"
          className="forgot-password-input"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <PrimaryButton
          onClick={onSubmitReset}
          className="forgot-password-button"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ForgotPassword;
