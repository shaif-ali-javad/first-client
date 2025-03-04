import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

function contact() {
  return (
    <Box textAlign={'center'} color={'#fff'} sx={{p:10, pt:5}}>
        <Grid2 container spacing={2} sx={{borderRadius: 10, p: 5, mt: 10, mb: 10, backgroundColor: "#000", borderColor: "#1f1f1f", border: 1}}>
        <Grid2 xs={4}>
      <Box sx={{p:5, borderRadius:10}}>
        <Typography variant='h3'>
        Address
        </Typography>
        <Typography variant='body1'>
        --------------------------------------
        </Typography>
      </Box>
        </Grid2>
        <Grid2 xs={4} >
      <Box sx={{p:5, borderRadius:10}}>
        <Typography variant='h3'>
        Email
        </Typography>
        <Typography variant='body1'>
        --------------------------------------
        </Typography>
      </Box>
        </Grid2>
        <Grid2 xs={4}>
      <Box sx={{p:5, borderRadius:10}}>
        <Typography variant='h3'>
        Phone
        </Typography>
        <Typography variant='body1'>
        --------------------------------------
        </Typography>
      </Box>
        </Grid2>
        </Grid2>
        {/* <Box>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28862.41838959099!2d55.4008576!3d25.2772352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1711956303799!5m2!1sen!2sae" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Box> */}
    </Box>
  )
}

export default contact
