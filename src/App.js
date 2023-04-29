import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import "./App.css";
import About from "./pages/About";
import Skin from "./pages/Services/Skin";
import Hair from "./pages/Services/Hair";
import PlasticSurguries from "./pages/Services/PlasticSurguries";
import MedicalTourism from "./pages/MedicalTourism";
import Dental from "./pages/Services/Dental";

const App = () => {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/medical-tourism-in-turkey"
          element={<MedicalTourism />}
        />
        <Route exact path="/skin" element={<Skin />} />
        <Route exact path="/hair" element={<Hair />} />
        <Route exact path="/plastic-surguries" element={<PlasticSurguries />} />
        <Route exact path="/dental" element={<Dental />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
