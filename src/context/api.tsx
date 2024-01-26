import axios, { AxiosInstance, AxiosResponse } from "axios";
import { User } from "./UserContext";
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

interface ApiResponse {
  success: boolean;
  // Add other properties if needed
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

    if (response.data.success) {
      toast.success("Account Created!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } else {
      toast.error("Account Not Created!", {
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

    return { success: false };
  }
};
// Signup

export const loginApi = async (
  email: string,
  password: string
): Promise<{ success: boolean; user?: User }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "test@test.com" && password === "password") {
        resolve({
          success: true,
          user: { id: "1", fullname: "test", email: "User" },
        });
      } else {
        resolve({ success: false });
      }
    }, 1000);
  });
};

export const getUsersApi = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users: User[] = [
        { id: "1", fullname: "user1", email: "user" },
        { id: "2", fullname: "user2", email: "user" },
      ];
      resolve(users);
    }, 1000);
  });
};
