import './index.css'

import App from './App.jsx'
import AuthProvider from './components/context/AuthProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <AuthProvider>
 <div className='dark:bg-slate-900 dark:text-white' >
  <App />
  </div>
 </AuthProvider>

  </BrowserRouter>

)


