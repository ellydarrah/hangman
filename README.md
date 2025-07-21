# Hangman Project

This is a fun little game app I made as part of my self-learning during my Software Engineering Apprenticeship. As a stretch goal, I made this a fullstack project.

https://github.com/user-attachments/assets/4c9c2540-6f00-4dc1-8685-7035af002587

## How It's Made:

**Tech used:** React with TypeScript and Express/Node backend with Prisma ORM and SQLite database.

**Thanks to:**

- Web Dev Simplified for the hangman app tutorial that provided the base for this project: https://www.youtube.com/watch?v=-ONUyenGnWw
- Arpan Neupane for the tutorial on creating an Express/Node backend: https://www.youtube.com/watch?v=mKmxc8TcWQ8

## How To Run It

- Frontend: navigate to the client folder and run `npm i` then `npm run dev`.
- Backend: navigate to the server folder and run and run `npm i` then `npm run dev` or `npm run start`.

## Note:

- React.Strict mode is turned on.

## Lessons Learned:

- Don't forget some learning materials can include deprecated code, e.g. the `keypress` eventListener used in the original tutorial. I followed the React documentation to discover that I could use `onClick` instead. This solved my errors, albeit with slightly altered functionality - namely that my version of the app doesn't recognise keyboard hits.
- JSX elements stored in arrays must be rendered with keys. I had to map the `BODY_PARTS` array in HangmanDrawing.tsx to resolve console error "Each child in a list should have a unique "key" prop".
- React.Fragment can be used to group a list of children without adding extra nodes to the DOM. I used this in HangmanWord.tsx to group together two `<span>` elements so I could assign a single key to the group, helping React track them correctly in a `.map()`. This was important because React requires a single top-level element in a `.map()` return.
