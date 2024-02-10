// CustomToolbar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const CustomToolbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Asistente virtual</Typography>
        {/* Agrega cualquier otra información o elementos que desees mostrar en el toolbar */}
      </Toolbar>
    </AppBar>
  );
};

export default CustomToolbar;
