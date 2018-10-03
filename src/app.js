import React from 'react';
import NumberButtons from './buttons/numbers.js';
import Output from './output';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }


  handleGetValue() {

  }

  render() {
    return (
      <div>
        <Output output={this.state.value} />
        <NumberButtons
          id="1"
          onClick={id => this.setState({ value: id })}
        />
        <NumberButtons
          id="2"
          onClick={id => this.setState({ value: id })}
        />
        <NumberButtons
          id="3"
          onClick={id => this.setState({ value: id })}
        />
        <NumberButtons
          id="4"
          onClick={id => this.setState({ value: id })}
        />
        <NumberButtons
          id="5"
          onClick={id => this.setState({ value: id })}
        />
        <NumberButtons
          id="6"
          onClick={id => this.setState({ value: id })}
        />
        <NumberButtons
          id="7"
          onClick={id => this.setState({ value: id })}
        />
        <NumberButtons
          id="8"
          onClick={id => this.setState({ value: id })}
        />
        <NumberButtons
          id="9"
          onClick={id => this.setState({ value: id })}
        />
        <NumberButtons
          id="0"
          onClick={id => this.setState({ value: id })}
        />
        <NumberButtons
          id="+"
          onClick={id => this.setState({ value: id })}
        />
        <NumberButtons
          id="C"
          onClick={id => this.setState({ value: id })}
        />
      </div>
    );
  }
}
