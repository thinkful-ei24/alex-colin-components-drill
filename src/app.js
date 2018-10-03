import React from 'react';
import NumberButtons from './buttons/numbers.js';
import Output from './output';
import './app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }



  handleGetValue(value) {
    this.setState({ value: this.state.value + value })
  }

  render() {
    return (
      <div className="calculator-board">
        <Output output={this.state.value} />
        <NumberButtons
          id="1"
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="2"
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="3"
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="4"
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="5"
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="6"
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="7"
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="8"
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="9"
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="0"
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="+"
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="-"
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="*"
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="/"
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="."
          onClick={(value) => this.handleGetValue(value)}
        />
        <NumberButtons
          id="="
          onClick={id => this.setState({ value: eval(this.state.value) })}
        />
        <NumberButtons
          id="C"
          onClick={id => this.setState({value: ''})}
        />
      </div>
    );
  }
}
