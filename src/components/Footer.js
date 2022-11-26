import React from 'react'
import '../styles/Footer.css'

import { Box, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      display='flex'
      alignItems="center"
      justifyContent="center"
      minH='150px'>
      <Text
        bgGradient="linear(to-l, #1828CA, #AA1238)"
        bgClip="text"
        fontSize="xl">&copy;SUHAIB 2022</Text>
      
    </Box>
  )
}

export default Footer;