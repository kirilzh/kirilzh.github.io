import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Route, Switch } from 'react-router-dom';
import FirstPost from './blog-post.md';
import CV from './curriculum-vitae.md';
import ToDo from './to-do-list.md';
import { Layout } from '../components/layout';

export const Routes: React.FunctionComponent = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/about" component={() => <ReactMarkdown source={CV} />} />
        <Route exact path="/todo" component={() => <ReactMarkdown source={ToDo} />} />
        <Route path="/" component={() => <ReactMarkdown source={FirstPost} />} />
      </Switch>
    </Layout>
  );
};
