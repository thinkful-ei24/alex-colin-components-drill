import React from 'react';
import './output.css';

export default function Output(props) {
  return (
    <div className="displayNum">
      <output>{props.output}</output>
    </div>
  );
}
