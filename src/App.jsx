import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer1 from "./component/Footer1";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import HeroFooter from "./component/HeroFooter";
import ScrollToTop from "./component/ScroolToTip";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <HeroFooter />
      <Footer1 />
      <Footer />
    </>
  );
}

export default App;
