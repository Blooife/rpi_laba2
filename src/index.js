import React from 'react';
import App from './App';
// import ReactDOM from "react-dom";
//import './i18n';
import { createRoot } from 'react-dom/client';

//import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.Suspense fallback="Loading...">
        <App />
    </React.Suspense>
);