import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from "react";
import axios from "axios";
import { endpoint } from "../utils/endpoint";

export type AuthContextType = {
  auth: any; // Define a proper type for `auth` if you know it
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState<AuthContextType | null>(null);

  const login = async (username: string, password: string) => {
    const response = await axios.post(`${endpoint}/auth/login`, {
      username,
      password,
    });

    console.log(response.data);
    setAuth(response.data);
    localStorage.setItem("auth", JSON.stringify(response.data));
  };

  const register = async (username: string, password: string) => {
    await axios.post(`${endpoint}/auth/register`, {
      username,
      password,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, register } as any}>
      {children}
    </AuthContext.Provider>
  );
};
