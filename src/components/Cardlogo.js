import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Cardlogo = () => {
  return (
    <div style={{display:"flex",flexdirection:"row"}}>
      <Card sx={{maxWidth:300}}>
      <CardContent>
                <Typography variant='h5'>
                    Web Design
                </Typography>
            </CardContent>
            <CardMedia component={'img'} 
            height="140"
            image='https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            alt="image corrupt"/>

            <CardContent>
                <Typography>
                    Beautiful content for web app development in this image and view of this image is also very good and attractive
                </Typography>
            </CardContent>
            <CardContent>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
            </CardContent>
            
        
            
            </Card>
    </div>
  )
}

export default Cardlogo
