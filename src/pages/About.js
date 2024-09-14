

import React from 'react'
import Layout from '../Component/Layout'
import { Typography ,Box} from '@mui/material'

const About = () => {
  return (
    <>
    <Layout>
     <Box sx={{my:15 ,textAlign:'center', p:2, "& p":{textAlign:'justify'} , "@media(max-width:600px)":{
      mt:0,"& h4":{fontSize:'1.9rem'} , "& p":{fontSize:'1rem'}
     }}}>
      <Typography variant='h4' sx={{fontSize:'1.7rem'}}>
        Welcome To My Restaurant
      </Typography>
      <p sx={{fontSize:'1.9rem',p:2}}>The About Us page for one of my favorite restaurants in Austin, Emmer & Rye, does a nice job with this. They highlight their focus on heirloom grains, whole animal butchery, and in-house fermentation. They also briefly explain what to expect when you dine with them—small plates to share, as well as the dim sum carts that circulate the restaurant.</p>

      <br/>
      <p> You’re not Shakespeare, and that’s okay. Neither am I. You’re writing for normal, everyday people. That means it should be simple and easy to understand. And don’t scoff at simple. You know who consistently wrote at a 5th-grade reading level? Hemingway. Simple makes for great writing.

Your restaurant’s About Us page should sound like you. If you run a fun, laid back place, keep that tone consistent in your writing. That means contractions, short sentences, maybe a joke or two.

But if your restaurant is ultra-conservative with starched aprons and a dress code, you’ll want to sound more professional. It’s okay to talk about the quality of your offerings and your dedication to excellence. Just avoid the buzzwords!</p>
     </Box>



    </Layout>
    
    
    </>
  )
}

export default About