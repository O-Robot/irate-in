import axios, { AxiosInstance, AxiosResponse } from "axios";
import { User, useAuth } from "./UserContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const api: AxiosInstance = axios.create({
  baseURL: "https://irateinchat.pythonanywhere.com/api/v1/",
  timeout: 5000, // request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need
  },
});

export const USER_CREATE = "/auth/users/";
export const USER_LOGIN = "/auth/login/";
export const TOKEN_REFRESH = "/auth/token/refresh/";

interface ApiResponse {
  access: string;
  refresh: string;
  success: boolean;
}

// Signup
export const signupApi = async (
  firstname: string,
  lastname: string,
  password: string,
  email: string
): Promise<ApiResponse> => {
  const loadingToastId = toast.info("Creating account...", {
    position: "top-right",
    autoClose: false,
  });
  try {
    const response: AxiosResponse<ApiResponse> = await api.post(USER_CREATE, {
      firstname,
      lastname,
      password,
      email,
    });
    toast.dismiss(loadingToastId);

    if (response.status === 201) {
      toast.success("Account Created!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } else {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    toast.dismiss(loadingToastId);

    toast.error("Account not Created!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    });

    return response.error;
  }
};
// Signup

// LogIn
export const loginApi = async (
  password: string,
  email: string
): Promise<ApiResponse> => {
  const loadingToastId = toast.info("Logging in...", {
    position: "top-right",
    autoClose: false,
  });
  try {
    const response: AxiosResponse<ApiResponse> = await api.post(USER_LOGIN, {
      password,
      email,
    });
    toast.dismiss(loadingToastId);

    if (response.status === 200) {
      toast.success("Successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } else {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    toast.dismiss(loadingToastId);

    toast.error("Invalid Username or Password!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    });

    return false ;
  }
};
// LogIn


