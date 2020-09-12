import * as React from 'react';
import './layout.css';
import { NavigationBar } from "./navigation";

export const Layout: React.FunctionComponent = (props) => {
  const { children } = props;

  return (
    <div className="layout">
      <div className="content">
        <NavigationBar />

        {children}
      </div>
    </div>
  )
}
