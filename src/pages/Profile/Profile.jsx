import React, { useState } from "react";

import "./Profile.scss";
import PrimaryButton from "../../components/UI/PrimaryButton";
import { ProfileImage } from "../../assets";
import { usePatchApi } from "../../hooks/api";
import { useSelector } from "react-redux";
import { FaRegEye } from "react-icons/fa";
import { Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import axios from "axios";
import { BASE_URL } from "../../config/api";

const Profile = () => {
  const { handleMutation } = usePatchApi();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const [profileImage, setProfileImage] = useState(ProfileImage);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const [formData, setFormData] = useState({
    name: user?.first_name,
    lastName: user?.last_name,
    email: user?.email,
    password: "******",
    confirmPassword: "",
  });
  const [form] = Form.useForm();
  const [formErrors, setFormErrors] = useState({
    name: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  console.log("user", user);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setFormErrors((prevState) => ({ ...prevState, [name]: "" }));
  };
  const onFinish = (values) => {
    if (values.password === values.confirmPassword) {
      message.success("Password and Confirm Password match!");
    } else {
      message.error("Password and Confirm Password do not match!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    let hasErrors = false;

    // Check for empty fields
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        errors[key] = "This field is required.";
        hasErrors = true;
      }
    });

    //  password validation
    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      hasErrors = true;
    }

    // confirmPassword validation
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
    } else {
      console.log("Form submitted:", formData);

      const res = await axios.patch(
        `${BASE_URL}/admin/update_admin`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      if (res.status === 200) {
        toast.success("Profile updated successful!");
        navigate("/admin/dashboard");
      } else {
        toast.error("An unexpected error occurred");
      }
      // handleMutation(
      //   {
      //     path: "admin/update_admin",
      //     data: formData,
      //   },
      //   (response) => {
      //     console.log("Profile updated Successfully:", response);
      //     toast.success("Profile updated successful!");
      //   },
      //   (error) => {
      //     console.error("Profile updated failed:", error);
      //     toast.error(error?.message || "Profile updated failed!");
      //   }
      // );
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-image">
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1681823422920-8bbe01d9235f?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <label htmlFor="image-upload" className="upload-button">
            <h6>Upload profile image</h6>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div className="profile-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="First name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && <p className="error">{formErrors.name}</p>}
            </div>

            <div className="form-group">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {formErrors.lastName && (
                <p className="error">{formErrors.lastName}</p>
              )}
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                disabled
              />
            </div>

            <div className="form-group ant-input-group">
              {/* <input
                type="password"
                id="password"
                name="password"
                placeholder="New password"
                value={formData.password}
                onChange={handleInputChange}
              /> */}
              {/* <Input.Password
                placeholder="New password"
                className="ant-input"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  height: "50px",
                  outline: "none",
                  border: "none !important",
                  background: "transparent",
                  color: "#000",
                }}
                iconRender={(visible) =>
                  visible ? (
                    <EyeTwoTone
                      style={{ color: "#000 !important", fontSize: "16px" }}
                    />
                  ) : (
                    <EyeInvisibleOutlined
                      style={{ color: "#000 !important", fontSize: "16px" }}
                    />
                  )
                }
              /> */}

              {formErrors.password && (
                <p className="error">{formErrors.password}</p>
              )}
            </div>
            <div className="form-group ">
              {/* <input
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              /> */}

              <div className="ant-input-group">
                <Form
                  form={form}
                  onFinish={onFinish}
                  layout="vertical"
                  initialValues={{ remember: true }}
                  style={{ maxWidth: "100%" }}
                >
                  <Form.Item
                    label=""
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      {
                        min: 6,
                        message: "Password must be at least 6 characters long!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Password"
                      value={formData.password}
                      name="password"
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        height: "50px",
                        outline: "none",
                        border: "none !important",
                        background: "transparent",
                        color: "#000",
                      }}
                      iconRender={(visible) =>
                        visible ? (
                          <EyeTwoTone
                            style={{
                              color: "#000 !important",
                              fontSize: "16px",
                            }}
                          />
                        ) : (
                          <EyeInvisibleOutlined
                            style={{
                              color: "#000 !important",
                              fontSize: "16px",
                            }}
                          />
                        )
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    label=""
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      {
                        validator: (_, value) =>
                          value && value === formData.password
                            ? Promise.resolve()
                            : Promise.reject(
                                new Error("Passwords do not match!")
                              ),
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      name="confirmPassword"
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        height: "50px",
                        outline: "none",
                        border: "none !important",
                        background: "transparent",
                        color: "#000",
                      }}
                      iconRender={(visible) =>
                        visible ? (
                          <EyeTwoTone
                            style={{
                              color: "#000 !important",
                              fontSize: "16px",
                            }}
                          />
                        ) : (
                          <EyeInvisibleOutlined
                            style={{
                              color: "#000 !important",
                              fontSize: "16px",
                            }}
                          />
                        )
                      }
                    />
                  </Form.Item>
                </Form>
                {/* {formErrors.confirmPassword && (
                  <p className="error">{formErrors.confirmPassword}</p>
                )} */}
              </div>
            </div>
            <PrimaryButton type="submit">Update</PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
