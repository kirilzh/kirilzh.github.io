import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, Deck, FlexBox, Markdown, Progress } from 'spectacle';
import * as slides from './slides.md'
import { Home } from './home';

const Slides = () => (
  <Deck
    transitionEffect="slide"
    template={() => (
      <FlexBox
        position="absolute"
        bottom={0}
        width={1}
      >
        <Box padding="1em">
          <Progress
            color="#CECECE"
            size={12}
          />
        </Box>
      </FlexBox>
    )}
  >
    <Markdown containsSlides>
      {slides}
    </Markdown>
  </Deck>
)

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/cv" component={Home} />
      <Route path="/" component={Slides} />
    </Switch>
  </Router>
);
