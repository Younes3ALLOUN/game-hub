import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'// version 2.10
import App from './App'
import theme from './theme' // change the default theme
import "./index.css"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/> {/* for dark mode*/}
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
