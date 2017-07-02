import { render } from 'react-dom';
import React from 'react';

const MyComponent = () => (
  <h1>Hello there!</h1>
);

render(<MyComponent />, document.getElementById('root'));
