
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './_contexts/LanguageContext.jsx'
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./_theme"



createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>

  <LanguageProvider>
    <App/>
  </LanguageProvider>
  
  </ThemeProvider>
)
