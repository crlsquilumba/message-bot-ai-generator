import React from 'react';
import { Typography, Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Divider, Paper, InputBase, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';

const MensajeWhatsapp = ({ mensaje }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            WhatsApp
          </Typography>
        </Toolbar>
      </AppBar>


       

        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <Toolbar />
          <Paper sx={{ p: 2, maxWidth: '80%', marginLeft: 'auto', borderRadius: '10px', backgroundColor: '#DCF8C6' }}>
            <Typography variant="body1">{mensaje}</Typography>
          </Paper>
          <Box sx={{ display: 'flex', marginTop: 2 }}>
         
            <Button variant="contained" color="primary" endIcon={<SendIcon />}>
              Enviar
            </Button>
          </Box>
        </Box>
  
    </div>
  );
};

export default MensajeWhatsapp;
