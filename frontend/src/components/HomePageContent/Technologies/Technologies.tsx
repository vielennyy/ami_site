import { Typography, Box, Container, } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import cl from '../../../images/technologies/C.png'
import python from '../../../images/technologies/python.png'
import java from '../../../images/technologies/Java.png'
import js from '../../../images/technologies/js.png'
import git from '../../../images/technologies/git.png'
import wordpress from '../../../images/technologies/wordpress.png'
import figma from '../../../images/technologies/figma.png'
import mongo from '../../../images/technologies/mongo.png'
import sql from '../../../images/technologies/sql.png'
import matlab from '../../../images/technologies/matlab.png'

export const Technologies = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        <>
        <Typography textAlign={'center'}>Технології</Typography>
        <Box display='flex' >
            <img src={cl} alt="" width='50px' height={'50px'} style={{margin:'10px'}}/>
            <img src={python} alt="" width='50px' height={'50px'} style={{margin:'10px'}}/>
            <img src={js} alt="" width='50px' height={'50px'} style={{margin:'10px'}}/>
            <img src={git} alt="" width='50px' height={'50px'} style={{margin:'10px'}}/>
            <img src={wordpress} alt="" width='50px' height={'50px'} style={{margin:'10px'}}/>
            <img src={figma} alt="" width='50px' height={'50px'} style={{margin:'10px'}}/>
            <img src={sql} alt="" width='50px' height={'50px'} style={{margin:'10px'}}/>
            <img src={mongo} alt="" width='50px'  style={{margin:'10px'}}/>
            <img src={matlab} alt="" width='50px'  style={{margin:'10px'}}/>
            <img src={java} alt="" width='50px'  style={{margin:'10px'}}/>
        </Box>
        </>
    )
}