import React from 'react'
import "./navbar.css";

import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import img_0 from '../../../assets/techhub logo.png'
import { NavLink } from 'react-router-dom'


function navbar() {
  return (
    <Box flex={{flexGrow:1}}>
        <AppBar position='fixed'>
            <Toolbar sx={{backgroundColor:'#000'}}>
            <img src={img_0} alt="" width={'10%'}/>
                <Typography variant='h6' component={'div'} sx={{pl:5}}>
                <NavLink className="link" to="/">
                   HOME
                 </NavLink>
                </Typography>
                <Typography variant='h6' component={'div'} sx={{pl:5, pr:5}}>
                <Box class="dropdown">
                 <NavLink className="dropbtn" to="/services">
                   SERVICES
                 </NavLink>
                 <Box class="dropdown-content" sx={{borderRadius: 10, p: 5, mt: 10, mb: 10, backgroundColor: "#000", borderColor: "#1f1f1f", border: 1}}>
                  <NavLink href="#">LIVING ROOM DECOR</NavLink>
                  <NavLink href="#">BEDROOM DECOR</NavLink>
                  <NavLink href="#">WARDROBE DESIGNS</NavLink>
                  <NavLink href="#">KITCHEN DECOR</NavLink>
                  <NavLink href="#">BATHROOM DECOR</NavLink>
                  <NavLink href="#">HOME STYLING</NavLink>
                  <NavLink href="#">WALL TREATMENT DESIGNS</NavLink>
                  <NavLink href="#">FALSE CEILING</NavLink>
                  <NavLink href="#">DECORATIVE LIGHTING</NavLink>
                </Box>
                </Box>
                </Typography><Typography variant='h6' component={'div'} sx={{pr:5}}>
                 <NavLink className="link" to="/about">
                   ABOUT
                 </NavLink>
                </Typography>
                <Typography variant='h6' component={'div'} sx={{}}>
                 <NavLink className="link" to="/contact">
                   CONTACT
                 </NavLink>
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default navbar
