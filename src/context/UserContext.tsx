
import React, { createContext, useState, ReactNode, useContext } from "react";

type User = {
  id: string;
  userEmail: string;
  fullname: string;
};

type AuthContextProps = {
  auth: {
    user: User;
  };
  setAuth: React.Dispatch<
    React.SetStateAction<{
      user: User;
    }>
  >;
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState({
    user: {
      id: "",
      userEmail: "",
      fullname: "",
    },
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
