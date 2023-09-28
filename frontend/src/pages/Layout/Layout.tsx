import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box} from '@mui/material';
import { Header } from '../../components/Header';


const theme = createTheme({
  palette: {
    primary: {
      main: '#EF5151'
    },
  },
  typography: {
    h1: {
      fontFamily: 'Gilroy, normal',
      fontWeight: 700,
      fontSize: 58,
      color: '#FFFFFF'
    },
    h2: {
      fontFamily: 'monospace, normal',
      fontSize: 46,
      fontWeight: 500,
      color: '#FFFFFF'
    },
    h3: {
      fontFamily: 'Gilroy, normal',
      fontSize: 32,
      fontWeight: 600,
      color: '#FFFFFF'
    },
    h4: {
      fontFamily: 'monospace, normal',
      fontSize: 20,
      fontWeight: 500,
      letterSpacing: '.2rem',
      color: '#FFFFFF',
      textDecoration: 'none',
    },
    h5: {
      fontFamily: 'Gilroy, normal',
      fontSize: 20,
      fontWeight: 500,
      color: '#FFFFFF'
    },
    h6: {
      fontFamily: 'Gilroy, normal',
      fontSize: 16,
      fontWeight: 400,
      color: '#fff'
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: 22,
      color: '#000000'
    },
    body2: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: 18,
      color: '#000000'
    },

  },
});


export const Layout = (props:any):JSX.Element => {
   return(
     <ThemeProvider theme={theme}>
       <CssBaseline/>
       <Box sx={{
         display: 'flex',
         flexDirection: 'column',
         backgroundColor: '#030509',
       }}>
         <Header/>
         <Box sx={{
           minHeight: 'calc(100vh - 395px)'
         }}>
           {props.children}
         </Box>
         {/* <Footer/> */}
       </Box>
     </ThemeProvider>
   )
}
