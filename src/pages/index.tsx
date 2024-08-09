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
import CreateSport from "./create-sport";
import PrivacyPolicy from "./privacy-policy";
import Clubs from "./clubs";
import Map from "./map";
import Memberships from "./memberships";
import Register from "./register";
import Login from "./login";
import CreateSubscribable from "./create-subscribable";

export const routes = {
  pageRoot: "/memberships",
  pageFeed: "/feed",
  pageClubs: "/clubs",
  pageMap: "/map",
  pageMemberships: "/memberships",
  pageRegister: "/register",
  pageLogin: "/login",
  pageCreateSport: "/create-sport",
  pageCreateSubscribable: "/create-subscribable",
  pagePrivacyPolicy: "/privacy-policy",
} as const;

const Pages: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to={routes.pageRoot} replace />} />
        <Route path={routes.pageRoot} element={<Memberships />} />
        <Route path={routes.pageFeed} element={<Feed />} />
        <Route path={routes.pageClubs} element={<Clubs />} />
        <Route path={routes.pageMap} element={<Map />} />
        <Route path={routes.pageCreateSport} element={<CreateSport />} />
        <Route
          path={routes.pageCreateSubscribable}
          element={<CreateSubscribable />}
        />
        <Route path={routes.pagePrivacyPolicy} element={<PrivacyPolicy />} />
        <Route path={routes.pageRegister} element={<Register />} />
        <Route path={routes.pageLogin} element={<Login />} />
      </Routes>
      <Nav />
    </Router>
  );
};

export default Pages;
