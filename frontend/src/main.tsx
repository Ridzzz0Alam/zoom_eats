import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

export const authService = "http://localhost:5000"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="1018188264453-5a7spcjphcgngp306aik9da6g9ut5qc3.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>;
  </StrictMode>,
)
