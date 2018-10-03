import React from 'react';
import NumberButtons from './buttons/numbers.js';
import Output from './output';
import './app.css';
import './grid.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleCalculateOutput(value) {
    try {
      this.setState({ value: eval(this.state.value)})
      } catch (e) {
        this.setState({value: 'ERROR ... LEARN HOW TO MATH'})
      }
  }

  handleGetValue(value) {
    this.setState({ value: this.state.value + value })
  }

  render() {
    return (
      <div className="calculator-board">
        <Output output={this.state.value} />
        <div className="grid-container">
          <NumberButtons
            value="C"
            id="clear"
            onClick={value => this.setState({value: ''})}
          />
          <NumberButtons
            value="/"
            id="divide"
            onClick={(value) => this.handleGetValue(value)}
          />
          <NumberButtons
            value="*"
            onClick={(value) => this.handleGetValue(value)}
          />
          <NumberButtons
            value="7"
            onClick={(value) => this.handleGetValue(value)}
          />
          <NumberButtons
            value="8"
            onClick={(value) => this.handleGetValue(value)}
          />
          <NumberButtons
            value="9"
            onClick={(value) => this.handleGetValue(value)}
          />
          <NumberButtons
            value="-"
            onClick={(value) => this.handleGetValue(value)}
          />
          <NumberButtons
            value="4"
            onClick={(value) => this.handleGetValue(value)}
          />
          <NumberButtons
            value="5"
            onClick={(value) => this.handleGetValue(value)}
          />
          <NumberButtons
            value="6"
            onClick={(value) => this.handleGetValue(value)}
          />
          <NumberButtons
            value="+"
            onClick={(value) => this.handleGetValue(value)}
          />
          <NumberButtons
            value="1"
            onClick={(value) => this.handleGetValue(value)}
          />
          <NumberButtons
            value="2"
            onClick={(value) => this.handleGetValue(value)}
          />
          <NumberButtons
            value="3"
            onClick={(value) => this.handleGetValue(value)}
          />
          <NumberButtons
            value="="
            id="equals"
            onClick={value => this.handleCalculateOutput(value)}
          />
          <NumberButtons
            value="0"
            id="zero"
            onClick={(value) => this.handleGetValue(value)}
          />
          <NumberButtons
            value="."
            onClick={(value) => this.handleGetValue(value)}
          />
        </div>
      </div>
    );
  }
}
