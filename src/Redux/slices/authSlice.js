import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  refreshToken: null,
  tokenExpiry: null,
  refreshTokenExpiry: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { user, token, refreshToken, tokenExpiry, refreshTokenExpiry } =
        action.payload;
      state.user = user;
      state.token = token;
      // state.refreshToken = refreshToken;
      // state.tokenExpiry = tokenExpiry;
      // state.refreshTokenExpiry = refreshTokenExpiry;
      state.isLoggedIn = true;
    },
    signup(state, action) {
      const { user, token, refreshToken, tokenExpiry, refreshTokenExpiry } =
        action.payload;
      state.user = user;
      state.token = token;
      // state.refreshToken = refreshToken;
      // state.tokenExpiry = tokenExpiry;
      // state.refreshTokenExpiry = refreshTokenExpiry;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      // state.refreshToken = null;
      // state.tokenExpiry = null;
      // state.refreshTokenExpiry = null;
      state.isLoggedIn = false;
    },
    // updateToken(state, action) {
    //   state.token = action.payload.token;
    //   state.tokenExpiry = action.payload.tokenExpiry;
    //   state.refreshToken = action.payload.refreshToken;
    //   state.refreshTokenExpiry = action.payload.refreshTokenExpiry;
    // },
  },
});

export const { login, signup, logout, updateToken } = authSlice.actions;

export default authSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { message } from "antd";

// import axios from "axios";
// import { BASE_URL } from "../../config/api";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ credentials, navigate }, thunkAPI) => {
//     console.log("credentialscredentials", credentials);
//     try {
//       // const response = await postRequest(credentials, "auth/login/user", true);
//       const response = await axios.post(`${BASE_URL}auth/login`, credentials);
//       console.log("response in loginnn", response);
//       if (response?.status === 200) {
//         // message.success(response?.data?.message || "Successfully Logged In");
//         toast.success(response?.data?.message || "Successfully Logged In");
//         navigate("/admin/dashboard");
//       } else {
//         toast.error(response?.response?.message || "");
//       }
//       const { user, token } = response.data;
//       localStorage.setItem("token", token);
//       return { user, token };
//     } catch (error) {
//       return thunkAPI.rejectWithValue({
//         message: error.response?.data?.message || "Login failed!",
//       });
//     }
//   }
// );

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     isLoading: false,
//     token: null,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.emailVerificationToken = null;
//       state.emailVerificationExpires = null;
//       localStorage.removeItem("token");
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         localStorage.setItem("token", action.payload.token);
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
