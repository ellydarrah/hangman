# Hangman Project

This is a fun little game app I made as part of my self-learning during my Software Engineering Apprenticeship.

## How It's Made:

**Tech used:** React with TypeScript

Thanks to Web Dev Simplified for the tutorial that provided the base for this project: https://www.youtube.com/watch?v=-ONUyenGnWw

## How To Run It

In the terminal: `npm i` then `npm run dev`.

## Note:

- React.Strict mode is turned on, meaning that components render twice in dev.

## Lessons Learned:

- Don't forget some learning materials can include deprecated code, e.g. the `keypress` eventListener used in the original tutorial. I followed the React documentation to discover that I could use `onClick` instead. This solved my errors, albeit with slightly altered functionality - namely that my version of the app doesn't recognise keyboard hits.
- JSX elements stored in arrays must be rendered with keys. I had to map the `BODY_PARTS` array in HangmanDrawing.tsx to resolve console error "Each child in a list should have a unique "key" prop".
- React.Fragment can be used to group a list of children without adding extra nodes to the DOM. I used this in HangmanWord.tsx to group together two `<span>` elements so I could assign a single key to the group, helping React track them correctly in a `.map()`. This was important because React requires a single top-level element in a `.map()` return.
