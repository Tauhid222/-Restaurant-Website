
import  { MenuList} from "../data/data"
import React from 'react'
import Layout from '../Component/Layout'
import { Box, CardActionArea ,Card ,CardMedia, CardContent, Typography } from '@mui/material'


const Menu = () => {
  return (
    <>
    <Layout>
    <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      {MenuList.map((menu)=>
      <Card sx={{maxWidth:'300px' ,display:'flex',m:4}}>
        <CardActionArea>
          <CardMedia sx={{minHeight:'300px'}}  component={'img'} src={menu.Image} alt={menu.name}/>
          <CardContent>
            <Typography variant="h5" gutterBottom component={"div"}>
              {menu.name}
            </Typography>
            <Typography variant="body2" >
              {menu.describe}
            </Typography>
              
          </CardContent>
        </CardActionArea>
      </Card>
      )}
     
    </Box>
    </Layout>
    </>
   
  )
}

export default Menu