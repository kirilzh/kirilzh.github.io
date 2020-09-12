import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './pages';

import './styles.css';

export const App: React.FunctionComponent = () => (
  <Router>
    <Routes />
  </Router>
);
