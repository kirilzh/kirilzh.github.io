import * as React from 'react';
import * as katex from 'katex';

const createMarkup = () => {
  return katex.renderToString('\\int_0^\\infty x^2 dx', { output: 'mathml' });
};

export function myComponent() {

  return (
    <React.Fragment>
      <span>This is a line </span>
      <span dangerouslySetInnerHTML={{ __html: createMarkup() }} />
    </React.Fragment>
  );
}
