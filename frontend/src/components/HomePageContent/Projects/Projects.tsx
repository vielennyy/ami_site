import { Box, Typography } from '@mui/material'
import andersen from '../../../images/Companies/andersen.png'
import interlink from '../../../images/Companies/interlink.png'
import spd from '../../../images/Companies/spd.jfif'

export const Projects = () => {

    return(
        <>
        <Typography>Проекти наших студентів</Typography>
        <Box display='flex'>
            <img src={spd} alt="" />
            <Typography>kjskxdhoiwdh</Typography>
        </Box>
        <Box display='flex'>
            <img src={andersen} alt="" />
            <Typography>kjskxdhoiwdh</Typography>

        </Box>
        <Box display='flex'>
            <img src={interlink} alt="" />
            <Typography>kjskxdhoiwdh</Typography>

        </Box>
        </>
    )
}