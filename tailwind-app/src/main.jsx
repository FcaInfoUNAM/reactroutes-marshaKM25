import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Aquí solo renderizas App, que ya incluye Nav */}
  </StrictMode>,
);
