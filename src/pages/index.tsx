import * as React from 'react';
import * as ReactMarkdown from "react-markdown";
import { Route, Switch } from 'react-router-dom';
import { Home } from "../home";
import * as FirstPost from "./blog-post.md";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/cv" component={Home} />
      <Route path="/" component={() => (
        <ReactMarkdown source={FirstPost} />
      )} />
    </Switch>
  )
};
