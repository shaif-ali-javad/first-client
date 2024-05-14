import React from "react";
import "./home.css";

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";

import img0 from "../../assets/1.jpg";
// import Slider from "./home/slider.jsx"

const home = () => {

  return (
    <Box>
      {/* <Slider/> */}
    <Box >
      <Box sx={{mt: -20}} className="img0-container">
      <img src={img0} className="img0" alt="" />
      <Typography variant="h1" sx={{ color: "#fff", position: "absolute", mt: -64, p:5, height: "80%", width: 400 }} textAlign={"left"}>
        welcome to tech hub decor
      </Typography>
      </Box>
      <Box sx={{ p:10}} color={"#fff"}>
        <Box sx={{borderRadius: 10, p: 5, mt: 10, mb: 10, backgroundColor: "#000", borderColor: "#1f1f1f", border: 1}}>

        <Typography variant="h1" component="h1" sx={{ }} textAlign={"center"} gutterBottom>
        Tech Hub Decor
        </Typography>
        <Typography variant="h2" component="h2" sx={{ }} textAlign={"center"} gutterBottom>
        STYLISH  •  EFFICIENT  •  AFFORDABLE 
        </Typography>
          <Typography textAlign={'center'}>
          Receive Full-Service Solutions From the Top Interior Design Company in Dubai Zen Interiors, capturing the essence of the UAE's vibrant future, proudly showcases a legacy of delivering over (+971)43405050 exceptional design projects. Our Dubai-based team consistently surpasses luxury benchmarks with our innovative and bespoke solutions. We are a leading interior design company in Dubai, known for delivering full-service solutions that cater to every aspect of our client's project needs.
          </Typography>
        </Box>
    </Box>
    <Box sx={{ p:10}}>
      <Typography variant="h3" component="h3" sx={{ color: "#fff" }} textAlign={"center"}>
      All About Interiors Under One Roof
      </Typography>
      <Box sx={{p:10}}>
        <Typography variant="h4" component="h4" sx={{ color: "#fff" }} textAlign={"center"}>
        Modular Solutions
        </Typography>
        <Typography variant="body1" component="h4" sx={{ color: "#fff" }} textAlign={"center"}>
        Modular Kitchen Wardrobes
        TV Unit Storage Unit
        </Typography>
      </Box>
      <Box sx={{p:10}}>
        <Typography variant="h4" component="h4" sx={{ color: "#fff" }} textAlign={"center"}>
        On-Site Services
        </Typography>
        <Typography variant="body1" component="h4" sx={{ color: "#fff" }} textAlign={"center"}>
        False Ceiling Design
        Electric and Plumbing Services Demolition and Repairs
        On-Site Carpentry
        Wall Design/Paneling & Painting
        Terrace Garden Flooring Work
        </Typography>
      </Box>
      <Box sx={{p:10}}>
        <Typography variant="h4" component="h4" sx={{ color: "#fff" }} textAlign={"center"}>
        Furniture and Décor 
        </Typography>
        <Typography variant="body1" component="h4" sx={{ color: "#fff" }} textAlign={"center"}>
        Soft Furnishing  Customized furniture for every room
        Decorative Pieces Decorative lighting Metal/Wooden Wall Art
        </Typography>
      </Box>
      <Box sx={{p:10}}>
        <Typography variant="h4" component="h4" sx={{ color: "#fff" }} textAlign={"center"}>
        And Lot More
        </Typography>
        <Typography variant="body1" component="h4" sx={{ color: "#fff" }} textAlign={"center"}>
        Personal Designer Design & Concepts Art Panels
        Easy Payment Options
        </Typography>
      </Box>
    </Box>
    <Box sx={{ p:10}}>
      <hr />
      <Typography variant="body1" component="h3" sx={{ color: "#fff" }} textAlign={"center"}>
      © 2024 Copyright: venerasoftwaresystems
      </Typography>
    </Box>
    </Box>
    </Box>
  );
};

export default home;
