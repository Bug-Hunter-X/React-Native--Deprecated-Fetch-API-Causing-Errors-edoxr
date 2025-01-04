# React Native Fetch API Deprecation

This repository demonstrates a common error in React Native applications: the use of a deprecated `fetch` API for making network requests.  The original code uses `fetch`, which is now discouraged in favor of more robust and feature-rich alternatives such as `axios` or `XMLHttpRequest`.

The `bug.js` file shows the problematic code, which may throw unexpected errors or lead to unexpected behavior. The `bugSolution.js` file provides a corrected implementation using `axios`.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies (including `axios`).
4. Run the project using your React Native development environment (e.g., `npx react-native run-android` or `npx react-native run-ios`).
5. Observe the error in `bug.js` and the corrected behavior in `bugSolution.js`.