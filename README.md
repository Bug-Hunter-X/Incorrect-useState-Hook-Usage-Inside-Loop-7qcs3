# Incorrect useState Hook Usage Inside Loop

This repository demonstrates a common error in React applications: the incorrect usage of the `useState` hook inside a loop.  The `useState` hook should only be called once during the initial render of a component. Calling it multiple times within a loop will lead to unexpected behavior and will not correctly update the state.

## Bug
The `bug.js` file demonstrates the problematic code.

## Solution
The `bugSolution.js` file provides the corrected code.  The loop is restructured to update the state only once, utilizing a single call to `useState`.  This results in the expected state updates.

## How to reproduce
1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the application.
5. Observe the unexpected behavior in the console.
