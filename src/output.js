import React from 'react';

export default function Output(props) {
  return (
    <div className="displayNum">
      <output>{props.output}</output>
    </div>
  );
}
