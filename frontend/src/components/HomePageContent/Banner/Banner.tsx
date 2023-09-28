import { useState, useEffect } from 'react'
import { Box, Typography,  } from '@mui/material'

import banner from '../../../images/Banner/Cubes.mp4'

export const Banner = () => {

    

    return(
        <Box height={'80vh'}>
            <video src={banner} autoPlay muted loop style={{width: '100%', height: '100vh', position: 'absolute', top: '0', right: '0', minWidth: '100%', objectFit: 'cover', zIndex:1}}>
            </video>
            <Box zIndex={2} display={'block'} position={'relative'} top={'20%'} alignItems={'center'} justifyContent={'center'}>
                <Typography variant='h1' textAlign={'center'} display='block' marginTop={'0vh'}>Ми - це найкращі IT спеціальності</Typography>
                <Typography variant='h1' textAlign={'center'}>Створюй майбутнє разом з нами</Typography>
                <Typography variant='h4' textAlign={'center'} marginTop='10vw' sx={{cursor:'pointer'}}>113 Прикладна математика</Typography>
                <Typography variant='h4' textAlign={'center'} sx={{cursor:'pointer'}}>126 Інформаційні системи та технології</Typography>
            </Box>
            
        </Box>
    )

}
