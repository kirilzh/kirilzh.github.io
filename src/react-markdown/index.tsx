import * as React from 'react';
import { v4 } from 'uuid';

interface Props {
  source: string;
}

export const ReactMarkdown: React.FunctionComponent<Props> = ({ source }) => {
  const content = source.split('\n').map((t) => {
    if (t.startsWith('#')) {
      const level = (t.match(/#/g) || []).length;
      return React.createElement(
        `h${level}`,
        { key: v4() },
        t.replace(/#/g, '')
      );
    }

    return React.createElement(
      'p',
      { key: v4() },
      t
    );
  });

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
};
