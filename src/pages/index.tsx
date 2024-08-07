import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Feed from "./feed";
import Following from "./following";
import CreateModality from "./create-modality";
import PrivacyPolicy from "./privacy-policy";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const routes = {
  pageRoot: "/",
  pageFeed: "/feed",
  pageFollowing: "/following",
  pageCreateModality: "/create-modality",
  pagePrivacyPolicy: "/privacy-policy",
} as const;

const Pages: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path={routes.pageRoot} element={<Feed />} />
          <Route path={routes.pageFeed} element={<Feed />} />
          <Route path={routes.pageFollowing} element={<Following />} />
          <Route
            path={routes.pageCreateModality}
            element={<CreateModality />}
          />
          <Route path={routes.pagePrivacyPolicy} element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Pages;
