import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = import.meta.env.BASE_URL ? `${import.meta.env.BASE_URL}sw.js` : './sw.js';
    navigator.serviceWorker.register(swUrl)
      .then((reg) => console.log('ServiceWorker registered successfully:', reg.scope))
      .catch((err) => console.warn('ServiceWorker registration optional/failed:', err));
  });
}
