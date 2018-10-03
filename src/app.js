import React from 'react';
import NumberButtons from './buttons/numbers.js';
import Output from './output';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  render() {
    return (
      <div>
        <Output output={this.state.value} />
        <NumberButtons id="1" onClick={id => this.setState({ value: id })} />
      </div>
    );
  }
}
