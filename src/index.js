
import React from 'react';
import reactDom from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const jsxElement = <h1>Our React Dom</h1>

reactDom.render(<App />,document.getElementById('root'));
