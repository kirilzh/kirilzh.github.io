import * as React from 'react';

interface Props {
  source: string;
}

export const ReactMarkdown: React.FunctionComponent<Props> = ({ source }) => {
  return (
    <React.Fragment>
      {
        source.split('\n').map((t) => {
          if (t.startsWith('#')) {
            const level = (t.match(/#/g) || []).length;
            return React.createElement(
              `h${level}`,
              {},
              t.replace(/#/g, '')
            );
          }

          return React.createElement(
            'p',
            {},
            t
          );
        })
      }
    </React.Fragment>
  );
};
