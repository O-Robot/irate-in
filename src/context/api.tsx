import { User } from "./UserContext";

// api.ts
export const signupApi = async (
  fullname: string,
  password: string,
  email: string
): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};

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
