import "./App.css";
import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// new home
// import Home from "./component/new-home.jsx";

const About = lazy(() => import("./components/about.jsx"));
const Services = lazy(() => import("./components/services.jsx"));
const Contact = lazy(() => import("./components/contact.jsx"));
// network ex home
const Home = lazy(() => import("./components/home"));

// services-details
// const Software = lazy(() => import("./component/home/services-details/software.jsx"));

// // partner
// const Sophos = lazy(() => import("./component/partner/sophos.jsx"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<h1>loading....</h1>}>
          <Routes>
            <Route exact path="/" element={<Home />} />

            {/* <Route path="/network" element={<Network />} /> */}
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* services-details */}
            {/* <Route path="/software" element={<Software />} />
            <Route path="/sophos" element={<Sophos />} /> */}
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
