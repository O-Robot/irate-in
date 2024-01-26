import axios, { AxiosInstance, AxiosResponse } from "axios";
import { useAuth } from "./UserContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { deleteCookie, getCookie, setCookie } from "./utility";

const authToken = `Bearer ${getCookie("id1")}`;
const api: AxiosInstance = axios.create({
  baseURL: "http://irateinchat.pythonanywhere.com/api/v1/",
  timeout: 5000, // request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Authorization: authToken,
  },
});

export const USER_CREATE = "/auth/users/";
export const USER_LOGIN = "/auth/login/";
export const TOKEN_REFRESH = "/auth/token/refresh/";
export const GET_CHATS = "/chat/user-chats/";
export const GET_USERS = "/auth/users/";
export const ADD_USER = "/auth/users/add-user/";
// export const GET_PERSON_CHAT = `/chat/user-chats/${id}`;

interface ApiResponse {
  access: string;
  refresh: string;
  success: boolean;
  results: User[];
}
interface User {
  id: string;
  name: string;
  email: string;
  firstname: "Oladosu";
  lastname: "Larinde";
}
/// Signup
export const signupApi = async (
  firstname: string,
  lastname: string,
  password: string,
  email: string
): Promise<ApiResponse> => {
  const loadingToastId = toast.info("Creating account...", {
    position: "top-right",
    autoClose: false,
    toastId: "signup1",
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
        toastId: "signupc",
      });
    } else {
      toast.error("Account not Created!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        toastId: "signupn",
      });
    }
    return { success: true, access: "", refresh: "", results: [] };
  } catch (error) {
    console.error("Error during signup:", error);
    toast.dismiss(loadingToastId);

    toast.error("Account not Created! Please try again.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      toastId: "signupe",
    });

    return { success: false, access: "", refresh: "", results: [] };
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
    toastId: "login",
  });

  try {
    const response: AxiosResponse<ApiResponse> = await api.post(USER_LOGIN, {
      password,
      email,
    });

    toast.dismiss(loadingToastId);

    if (response.status === 200) {
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        toastId: "login",
      });
    } else {
      toast.error("Login Failed! Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        toastId: "login",
      });
    }
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    toast.dismiss(loadingToastId);

    toast.error("Invalid Username or Password! Please try again.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      toastId: "err",
    });

    return { success: false, access: "", refresh: "", results: [] };
  }
};
// LogIn

// getChats
export const getChatsApi = async (): Promise<ApiResponse> => {
  const loadingToastId = toast.info("Loading chats...", {
    position: "top-right",
    autoClose: false,
  });

  try {
    const response: AxiosResponse<ApiResponse> = await api.get(GET_CHATS);
    toast.dismiss(loadingToastId);

    if (response.status === 200) {
      toast.success("Chats Loaded!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        toastId: "chats",
      });
    }

    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    toast.dismiss(loadingToastId);

    return { success: false, access: "", refresh: "", results: [] };
  }
};
// getChats

// addPerson
export const addPerson = async (
  email: string,
  name?: string
): Promise<ApiResponse> => {
  const loadingToastId = toast.info("Adding Person...", {
    position: "top-right",
    autoClose: false,
    toastId: "add1",
  });

  try {
    const response: AxiosResponse<ApiResponse> = await api.post(ADD_USER, {
      name,
      email,
    });

    toast.dismiss(loadingToastId);

    if (response.status === 200) {
      toast.success("Person has Successfully been added!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        toastId: "add2",
      });
    } else {
      toast.error("Adding Failed! Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        toastId: "add3",
      });
    }

    return { success: true, access: "", refresh: "", results: [] };
  } catch (error) {
    toast.dismiss(loadingToastId);

    toast.error("Error Adding Person! Please try again.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    });

    return { success: false, access: "", refresh: "", results: [] };
  }
};
// addPerson

//Logout
export const logUserOut = async (): Promise<void> => {
  try {
    deleteCookie("id1");
    deleteCookie("id2");
  } catch (error) {
    toast.error("Error Logging User out! Please try again.", {
      position: "top-right",
      autoClose: 3000,
      toastId: "login",
      hideProgressBar: true,
    });
  }
};
//Logout

export const getUsers = async (): Promise<User[]> => {
  const loadingToastId = toast.info("Loading Users...", {
    position: "top-right",
    autoClose: false,
  });

  try {
    const response: AxiosResponse<ApiResponse> = await api.get(GET_USERS);
    toast.dismiss(loadingToastId);

    if (response.status === 200) {
      toast.success("Users Loaded!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        toastId: "chats",
      });
    }

    console.log("USERS", response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error during login:", error);
    toast.dismiss(loadingToastId);

    return [];
  }
};
