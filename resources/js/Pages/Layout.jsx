import React from "react";
import NavBar from "@/Pages/NavBar/NavBar";
import Footer from "./Footer/Footer";
function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <main className="main-content flex-grow">
        <NavBar />
        {children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
