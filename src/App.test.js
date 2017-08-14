import React from 'react';
import ReactDOM from 'react-dom';
import TUT from './TUT';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TUT />, div);
});
