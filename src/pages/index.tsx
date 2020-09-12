import * as React from 'react';
import * as ReactMarkdown from "react-markdown";
import { Route, Switch } from 'react-router-dom';
import { Home } from "../home";
import * as FirstPost from "./blog-post.md";
import { Layout } from "../components/layout";

export const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/about" component={Home} />
        <Route path="/" component={() => (
          <ReactMarkdown source={FirstPost} />
        )} />
      </Switch>
    </Layout>
  )
};
