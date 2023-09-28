import { Typography, Box } from '@mui/material'
import dev from '../../../images/Profecion/dev.png'
import data from '../../../images/Profecion/data-science.png'
import qa from '../../../images/Profecion/qa.jpg'
export const Profecions = () => {
    return(
        <>
        <Typography textAlign={'center'} fontSize={'36px'} color='black' marginTop={'50px'}>Ми готуємо спеціалістів для будь-якого напрямку</Typography>
        <Box display='flex' alignItems={'center'} justifyContent={'center'}>
            <Box display='flex' flexDirection={'column'} alignItems={'center'} justifyContent={'center'} margin='20px'>
                <img src={dev} alt="" width='100px'/>
                <Typography>Developer</Typography>
            </Box>
            <Box display='flex' flexDirection={'column'} alignItems={'center'} justifyContent={'center'} margin='20px'>
                <img src={data} alt="" width='100px'/>
                <Typography>Data Scientist</Typography>
            </Box>
            <Box display='flex' flexDirection={'column'} alignItems={'center'} justifyContent={'center'} margin='20px'>
                <img src={qa} alt="" width='100px'/>
                <Typography>QA</Typography>
            </Box>
        </Box>
        </>
    )
}