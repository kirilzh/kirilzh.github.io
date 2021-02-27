import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import FirstPost from 'src/entries/2020-09-11-first-blog-post.md';
import WhyIsSoftwareEngineeringHard from 'src/entries/2020-09-27-why-is-software-engineering-hard.md';
import CV from 'src/entries/curriculum-vitae.md';
import ToDo from 'src/entries/to-do-list.md';

import { Layout } from 'src/components/layout';
import { ReactMarkdown } from 'src/react-markdown';
import { myComponent } from './latex';

export const Routes: React.FunctionComponent = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/about" component={() => <ReactMarkdown source={CV} />} />
        <Route exact path="/todo" component={() => <ReactMarkdown source={ToDo} />} />
        <Route exact path="/parser" component={() => <ReactMarkdown source={FirstPost} />} />
        <Route exact path="/latex" component={myComponent} />
        <Route path="/" component={() => <ReactMarkdown source={FirstPost} />} />
      </Switch>
    </Layout>
  );
};
