import React from "react";
import image from "../assets/0.jpeg";

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";

// import Slider from "./home/slider.jsx"
import Navbar from "./forall/navbar/navbar.jsx"

import Home1 from "./home/home.jsx"

const Home = () => {

  return (
    <Box>
      <Navbar />
      <Home1 />
    </Box>
  );
};

export default Home;
