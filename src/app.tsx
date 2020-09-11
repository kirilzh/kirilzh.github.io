import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from "./pages";

export const App = () => (
  <Router>
    <Routes />
  </Router>
);
