import * as React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useViewport from '../hooks/useViewPort';
import Container from '@mui/material/Container';
import LogoImg from '../assets/images/logo.png';
import NAV_LIST from '../constant/navList';

const Logo = styled.img`
  width: 160px;
  height: 100%;
  cursor: pointer;
`;

function DrawerAppBar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" href="/" sx={{ my: 2, cursor: 'pointer' }} onClick={() => navigate('/')}>
        앤탤레콤
      </Typography>

      <Divider />
      <List>
        {NAV_LIST.map(item => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton href={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box justifyContent="center" sx={{ display: 'flex', bgcolor: 'white', height: 'auto' }}>
      <AppBar
        component="nav"
        position="static"
        sx={{ bgcolor: '#fff', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}
      >
        <Container maxWidth="lg" height="100%">
          <Toolbar height="100%">
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: 'center', justifyContent: 'start' }}
            >
              <Logo src={LogoImg} alt="앤텔레콤" onClick={() => navigate('/')} />
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {NAV_LIST.map(item => (
                <Button key={item.label} onClick={() => navigate(item.path)} sx={{ color: 'black', mx: 2 }}>
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
