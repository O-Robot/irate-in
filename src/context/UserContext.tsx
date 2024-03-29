// AuthContext.tsx
import React, { createContext, useState, ReactNode, useEffect } from "react";

type User = {
  id: string;
  userEmail: string;
  fullname: string;
};
type UserM = {
  id: string;
  email: string;
  name: string;
};
type AuthContextProps = {
  auth: {
    user: User;
    userm: UserM;
  };
  setAuth: React.Dispatch<React.SetStateAction<{ user: User; userm: UserM }>>;
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const storedAuth = localStorage.getItem("auth");
  const initialAuth = storedAuth
    ? JSON.parse(storedAuth)
    : { user: {}, userm: {} };

  const [auth, setAuth] = useState(initialAuth);

  useEffect(() => {
    // Save auth to localStorage whenever it changes
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
