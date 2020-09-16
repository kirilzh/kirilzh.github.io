import * as React from 'react';
import './toggle.css';

const Toggle: React.FunctionComponent = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span
        className="slider round"
        onClick={() => {
          const htmlTag = document.getElementsByTagName('body')[0];
          if (htmlTag.className === 'light-theme') {
            htmlTag.className = 'dark-theme';
            return;
          }

          htmlTag.className = 'light-theme';
        }}
      />
    </label>
  );
};

export default Toggle;
