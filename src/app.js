import React from 'react';
import NumberButtons from './buttons/numbers.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NumberButtons />
    )
  }
}
