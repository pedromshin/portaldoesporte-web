import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Feed from "./feed";
import Header from "../components/Header";
import Nav from "../components/Nav";
import CreateModality from "./create-modality";
import PrivacyPolicy from "./privacy-policy";
import Clubs from "./clubs";
import Map from "./map";
import Memberships from "./memberships";
import Register from "./register";
import Login from "./login";
import { AuthProvider } from "../providers/AuthProvider";

export const routes = {
  pageRoot: "/memberships",
  pageFeed: "/feed",
  pageClubs: "/clubs",
  pageMap: "/map",
  pageMemberships: "/memberships",

  pageCreateModality: "/create-modality",
  pagePrivacyPolicy: "/privacy-policy",
} as const;

const Pages: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route
              path="*"
              element={<Navigate to={routes.pageRoot} replace />}
            />

            <Route path={routes.pageRoot} element={<Memberships />} />
            <Route path={routes.pageFeed} element={<Feed />} />
            <Route path={routes.pageClubs} element={<Clubs />} />
            <Route path={routes.pageMap} element={<Map />} />
            <Route path={routes.pageMemberships} element={<Memberships />} />
            <Route
              path={routes.pageCreateModality}
              element={<CreateModality />}
            />
            <Route
              path={routes.pagePrivacyPolicy}
              element={<PrivacyPolicy />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Nav />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default Pages;
