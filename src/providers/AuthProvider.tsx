import {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from "react";
import axios from "axios";
import { endpoint } from "../utils/endpoint";
import { jwtDecode, JwtPayload } from "jwt-decode";

export type AuthContextType = {
  auth: {
    access_token: string;
    decodedToken: JwtPayload & {
      username: string;
    };
  };
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
  verifyAuth: (callback: () => Promise<void>) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState<any>(undefined);

  useEffect(() => {
    const checkAuth = () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        try {
          const decodedToken: AuthContextType["auth"]["decodedToken"] =
            jwtDecode(access_token);

          setAuth({ access_token, decodedToken });
        } catch (error) {
          console.error("Token decoding error:", error);
        }
      }
    };

    checkAuth();
  }, [setAuth]);

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

  const verifyAuth = (callback: () => Promise<void>) => {
    console.log(auth);
    if (!auth) {
      alert("You must be logged in to perform this action.");
      return;
    } else {
      callback();
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login, register, logout, verifyAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
