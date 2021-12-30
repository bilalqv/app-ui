## Part 2 - Creating Hello world react application + Mockserver

Created a branch named init-react-app.

Initialized the react application by using the `npx create-react-app app-ui` command.

Create a node.js server inside the react app, which acts like a mock server. The mock server starts and stops along with the react app start using the command `npm start`. I used concurrently package for this purpose.

The mock server is a simple express application that returns a response message when request is made at http://localhost:3004/data.