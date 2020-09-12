import * as React from 'react';
import { Link } from "react-router-dom";

import './navigation.css';

export const NavigationBar: React.FunctionComponent = (props) => {
  return (
    <nav className="navigation">
      <ul className="list">
        <li className="list-item">
          <h3>
            <Link to="/">kirilzh.github.io</Link>
          </h3>
        </li>
        <li className="list-item">
          <p>
            <Link to="/about">about</Link>
          </p>
        </li>
      </ul>
    </nav>
  )
}
