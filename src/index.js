import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme} from '@mui/material'
import { orange } from '@mui/material/colors'

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette:{
      primary: {
          main: "#CCC"
      },
      secondary: {
        main: orange[500]
      }
  },
  typography:{
    myvariant: {
      fontSize: "2rem",
      color: orange[500]
    }
  }
});

root.render(
  <React.StrictMode>
    <App />
    {/*
    <ThemeProvider theme={theme}>
      <App />      
    </ThemeProvider>    
     */}


  </React.StrictMode>
  
);

