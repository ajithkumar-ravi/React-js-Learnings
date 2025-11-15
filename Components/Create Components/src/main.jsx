import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Degree as Branch } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Branch/>
  </StrictMode>,
)
