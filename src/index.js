import React from 'react';
import { createRoot } from 'react-dom/client'; // New import for React 18
import './index.css';
import './App.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

// React 18 style root rendering
const container = document.getElementById('root');
const root = createRoot(container); // Create a root.
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
