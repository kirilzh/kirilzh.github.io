import * as React from 'react';
import { Box, Deck, FlexBox, Markdown, Progress } from 'spectacle';
import * as slides from './slides.md'

export const App = () => (
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
);
