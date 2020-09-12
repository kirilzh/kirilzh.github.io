import * as React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';

export const NavigationBar: React.FunctionComponent = () => {
  return (
    <nav className="navigation">
      <ul className="list">
        <li className="list-item">
          <h3>
            <Link to="/">kirilzh.github.io</Link>
          </h3>
        </li>
        <ul className="list">
          <li className="list-item">
            <p>
              <Link to="/todo">to do</Link>
            </p>
          </li>
          <li className="list-item">
            <p>
              <Link to="/about">about</Link>
            </p>
          </li>
        </ul>
      </ul>
    </nav>
  );
};
