import * as React from 'react';
import * as ReactMarkdown from "react-markdown";
import * as Bio from './bio.md';

export const Home = () => (
  <ReactMarkdown source={Bio}/>
)
