import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from "./pages";

import './styles.css';

export const App = () => (
  <Router>
    <Routes />
  </Router>
);
