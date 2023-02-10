import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { useNavigate } from 'react-router-dom';


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleHomeItem = () => {
        navigate('/');
    };
    const handleAboutItem = () => {
        navigate('/about');
    };
    const handleContactItem = () => {
        navigate('/contact');
    };
var username=localStorage.getItem('username');

    return (
        <AppBar position="static" sx={{ background: "#07004D", width:"100%",boxShadow:"none"}} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Button style={{ fontSize: '20px' }} href="/" sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',

                    }}>
                      Addy's Corner

                    </Button>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            <MenuItem onClick={handleHomeItem}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleAboutItem}>
                                <Typography textAlign="center">About</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleContactItem}>
                                <Typography textAlign="center">Contact</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Button style={{ fontSize: '20px' }} href="/" sx={{
                        mr: 0,
                        display: { xs: 'flex', md: 'none' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',

                    }}>
                        Addy's Corner

                    </Button>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button href="/about" sx={{ my: 2, color: 'white', display: 'block' }}>
                          About

                        </Button>
                        <Button href="/contact" sx={{ my: 2, color: 'white', display: 'block' }}>
                            Contact
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );

    
}
export default ResponsiveAppBar;