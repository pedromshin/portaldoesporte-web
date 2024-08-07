import {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from "react";
import axios from "axios";
import { endpoint } from "../utils/endpoint";

export type AuthContextType = {
  auth: { access_token: string }; // Define a proper type for `auth` if you know it
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState<any>(null);

  useEffect(() => {
    const checkAuth = () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        setAuth({ access_token });
      }
    };

    checkAuth();
  }, []);

  const login = async (username: string, password: string) => {
    const response = await axios.post(`${endpoint}/auth/login`, {
      username,
      password,
    });
    const { access_token } = response.data;
    localStorage.setItem("access_token", access_token);
    setAuth({ access_token });
  };

  const register = async (username: string, password: string) => {
    await axios.post(`${endpoint}/auth/register`, { username, password });
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
