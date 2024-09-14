
import {Box, Typography} from "@mui/material"
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:'center',bgcolor:'#1A1A19' ,color:'white', p:2}}>
        <Box sx={{my:3 , spacing:6, px:2 ,"& svg " :{fontSize:'30px' ,cursor:'pointer'  }, "& svg:hover":{ color:'goldenrod',transform:'translateX(4px)',transition:'all 400ms' }}}>
         < InstagramIcon/>
         <TwitterIcon />   
         <GitHubIcon/>    
         < WhatsAppIcon/>

        </Box>
        <Typography variant="h5" sx={{"@media  (max-width:600px)": {fontSize:'1rem'}}}> 
            Welcome To My Website &copy; Developer Tauhid
        </Typography>

      </Box>
    </>
  )
}

export default Footer
