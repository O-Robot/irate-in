import axios, { AxiosInstance, AxiosResponse } from "axios";
import { useAuth } from "./UserContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { deleteCookie, getCookie, setCookie } from "./utility";

const authToken = `Bearer ${getCookie("id1")}`;
const api: AxiosInstance = axios.create({
  baseURL: "https://irateinchat.pythonanywhere.com/api/v1/",
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
export const ADD_USER = "/auth/users/add-user/";
// export const GET_PERSON_CHAT = `/chat/user-chats/${id}`;

interface ApiResponse {
  access: string;
  refresh: string;
  success: boolean;
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
    toastId: "signup",
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
        toastId: "signup",
      });
    } else {
      toast.error("Account not Created!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        toastId: "signup",
      });
    }

    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    toast.dismiss(loadingToastId);

    toast.error("Account not Created! Please try again.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      toastId: "signup",
    });

    return { success: false, access: "", refresh: "" };
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
      toastId: "login",
    });

    return { success: false, access: "", refresh: "" };
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
    // else {
    //   toast.error("Chats Failed! Please try again.", {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: true,
    //     toastId: "chats",
    //   });
    // }

    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    toast.dismiss(loadingToastId);

    // toast.error("Error Retrieving Chats.", {
    //   position: "top-right",
    //   autoClose: 3000,
    //   hideProgressBar: true,
    //   toastId: "chats",
    // });

    return { success: false, access: "", refresh: "" };
  }
};
// getChats

// LogIn
export const addPerson = async (
  email: string,
  name?: string
): Promise<ApiResponse> => {
  const loadingToastId = toast.info("Adding Person...", {
    position: "top-right",
    autoClose: false,
    toastId: "add",
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
        toastId: "add",
      });
    } else {
      toast.error("Adding Failed! Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        toastId: "add",
      });
    }

    return response.data;
  } catch (error) {
    toast.dismiss(loadingToastId);

    toast.error("Error Adding Person! Please try again.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    });

    return { success: false, access: "", refresh: "" };
  }
};
// LogIn

// let retrycount = 0;

// export const updateUserAccess = async (): Promise<ApiResponse> => {
//   const options = {
//     headers: {
//       Accept: "application/json",
//       Authorization: getAuthToken(),
//     },
//   };
//   try {
//     const response: AxiosResponse<ApiResponse> = await api.post(
//       TOKEN_REFRESH,
//       {},
//       // options
//     );
//     console.log("cooki", response.data);
//     if (response.data.access) {
//       setCookie("id1", response.data.access);
//       toast.success("User Updated!", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: true,
//       });
//     } else {
//       toast.error("Error! Please try again.", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: true,
//       });
//     }

//     return response.data;
//   } catch (err: any) {
//     if (
//       String(err).indexOf("Network Error") > -1 ||
//       err?.response?.status == 500
//     ) {
//       if (retrycount <= 5) {
//         ++retrycount;
//         updateUserAccess();
//       } else {
//         retrycount = 0;
//       }
//       return err;
//     }

//     return { success: false, access: "", refresh: "" };
//   }
// };
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
