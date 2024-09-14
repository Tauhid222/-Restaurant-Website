
import React from 'react'
import Layout from '../Component/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Typography ,Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

const Contact = () => {
  return (
    <>
    
    <Layout>
        <Box sx={{ p:2} }>
          <Typography variante="h4"  sx={{fontSize:'1.9rem'}}>
            Conatact My Resturnt
          </Typography>
          <p>Restaurants in ht Place restaurants, Central Delhi restaurants, Casual Dining in Delhi NCR, Casual Dining near me, Casual Dining in Central Delhi, Casual Dining in Connaught Place, in Delhi NCR, near me, in Central Delhi, in Connaught Place, Order food online in Connaught Place, Order food online in Delhi NCR, Order food online in Central Delhi, New Year Parties in Delhi NCR, Christmas' Special in Delhi NCR</p>
        </Box>
        <Box sx={{m:3}}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black',textAlign:'center',color:'white',fontSize:'1.9rem'}}>
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                  <SupportAgentIcon  sx={{color:'red' ,pt:1}}/> +91765462990 (tollfree)
                  </TableCell>
                  
                </TableRow>   
                <TableCell>
                  <SupportAgentIcon  sx={{color:'skyblue' ,pt:1}}/> help@myres.com
                  </TableCell>
                  <TableRow>
                  <TableCell>
                  <LocalPhoneIcon  sx={{color:'green' ,pt:1}}/> +91292729709
                  </TableCell>
                  
                </TableRow> 

              </TableBody>

            </Table>

          </TableContainer>
        </Box>
    </Layout>
    </>
  )
}

export default Contact