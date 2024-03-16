import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {CssBaseline} from '@mui/material'
import {HelmetProvider} from 'react-helmet-async'
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#2196f3', // Change this to your desired primary color
//     },
//     secondary: {
//       main: '#f50057', // Change this to your desired secondary color
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <HelmetProvider>
    <CssBaseline/>
    <div onContextMenu={(e)=>e.preventDefault()}>
      <App />
    </div>
    </HelmetProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
)
