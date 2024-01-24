// AuthContext.tsx
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
  FC,
} from "react";

export type User = {
  id: string;
  email: string;
  fullname: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
};

type AuthAction = { type: "LOGIN"; user: User } | { type: "LOGOUT" };

const AuthContext = createContext<
  { state: AuthState; dispatch: Dispatch<AuthAction> } | undefined
>(undefined);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.user, isAuthenticated: true };
    case "LOGOUT":
      return { user: null, isAuthenticated: false };
    default:
      return state;
  }
};

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
