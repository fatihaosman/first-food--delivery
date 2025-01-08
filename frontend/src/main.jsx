import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './components/context/storeContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider> {/*to add support of context to our project */}
     <App />
  </StoreContextProvider>
    
  </BrowserRouter>,
)
