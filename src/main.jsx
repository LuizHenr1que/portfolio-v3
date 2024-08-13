import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Certifique-se de importar apenas uma vez
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/portfolio-v3/"> {/* Wrap App with Router */}
      <App />
    </Router>
  </React.StrictMode>,
);
