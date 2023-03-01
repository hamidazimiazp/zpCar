import React from "react";
import Header from "../modules/Header/Header";
import Footer from "../modules/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="root">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
