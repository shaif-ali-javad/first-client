import React from 'react'

import { Box, Typography } from '@mui/material'


function about() {
  return (
    <Box color={'#fff'} textAlign={'center'} sx={{p:10, pt:20}}>
      <Typography variant={'h1'} gutterBottom>A Word About Us</Typography>
      <Typography variant={'h5'} sx={{}} gutterBottom>
      We care for your home.
      </Typography>
      <Typography variant={'body1'} sx={{}}>
      We are aware of the emotions associated with your dream home. We also understand that you are looking for home decor that is stylish, yet aﬀordable. Our professionals listen to your preferences, top it up with their expertise and try and replicate your personality in your home decor. We take care not to compromise on quality and ensure to deliver a product you would want to boast of. For us, every home is an emotion in itself.
      </Typography>
    </Box>
  )
}

export default about
