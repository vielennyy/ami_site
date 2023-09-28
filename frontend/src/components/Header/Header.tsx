import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../../images/aim.png';

import { useState } from 'react'
import { Menu, Typography, Toolbar, Box, AppBar, Container, Avatar, Button, Tooltip, MenuItem, IconButton } from '@mui/material'

const pages = ['Студенту', 'Абітурієнту', 'Кафедра', 'Контакти'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header = () => {
    return <ResponsiveAppBar/>
}

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color='transparent' sx={{zIndex: 2, boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.05)', height: '100px', width:'100%', display: 'flex',
    alignItems: 'center', flexDirection:'row',
    justifyContent: 'space-between', padding: '10px 80px'}}>
            
                <Link to='/' style={{ textDecoration: 'none', color: 'fff',width:'10vw'}}>
                <Box display='flex' alignItems='center' width='70vw'>
                    <img src={logo} width='100px' style={{marginRight:'2vw', cursor:'pointer'}}/>
                    {/* <Typography
                        variant="h4"
                        // noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        
                        }}
                    >
                        Кафедра прикладної математики та інформатики
                    </Typography> */}
                    </Box>
                </Link>
                
            
          
            <Box width='50vw' color='red'></Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, alignItems: 'center' }}>
            <Link to={'/student'} style={{ textDecoration: 'none', }}>
                  <Button 
                    sx={{ my: 2, 
                        color: 'black', 
                        display: 'block', 
                        margin: '1vw', 
                        '&:hover': {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                        }
                    }}
                  >
                    <Typography variant='h4'>Студенту</Typography>
                    
                  </Button>
                </Link>
                <Link to={'/abiturient'} style={{ textDecoration: 'none' }}>
                <Button 
                    sx={{ my: 2, 
                        color: 'black', 
                        display: 'block', 
                        margin: '1vw', 
                        '&:hover': {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            color: '#75A2F7',
                        }
                    }}
                  >
                    <Typography variant='h4'>Абітурієнту</Typography>
                  </Button>
                </Link>
                <Link to={'/cathedra'} style={{ textDecoration: 'none' }}>
                <Button 
                    sx={{ my: 2, 
                        color: 'black', 
                        display: 'block', 
                        margin: '1vw', 
                        '&:hover': {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            color: '#75A2F7',
                        }
                    }}
                  >
                    <Typography variant='h4'>Кафедра</Typography>
                    
                  </Button>
                </Link>
                <Link to={'/contacts'} style={{ textDecoration: 'none' }}>
                <Button 
                    sx={{ my: 2, 
                        color: 'black', 
                        display: 'block', 
                        margin: '1vw', 
                        '&:hover': {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            color: '#75A2F7',
                        }
                    }}
                  >
                    <Typography variant='h4'>Контакти</Typography>
                  </Button>
                </Link>
                <Link to={'/contacts'} style={{ textDecoration: 'none' }}>
                <Button 
                    sx={{ my: 2, 
                        backgroundColor: '#083FA0',
                        width: '10vw',
                        border: '3px solid #083FA0',
                        borderRadius: '50px', 
                        display: 'block', 
                        margin: '1vw', 
                        '&:hover': {
                            backgroundColor: '#083FA0',
                            boxShadow: 'none',
                            color: '#75A2F7',
                            
                        }
                    }}
                  >
                    <Typography variant='h4'>Увійти</Typography>
                  </Button>
                </Link>
          </Box>
    </AppBar>
  );
}


