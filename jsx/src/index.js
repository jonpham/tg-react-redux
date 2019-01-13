// Import the React & React-Dom
import React from 'react';
import ReactDOM from 'react-dom';

// Create React Component

const App = () => {
  return <div> Hello there!</div>;
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);