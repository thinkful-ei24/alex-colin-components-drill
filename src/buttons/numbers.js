import React from 'react';

export default function NumberButtons(props) {
  return (
    <button
      className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised"
      onClick={() => props.onClick(props.value)}
      id={props.id}
      value={props.value}
    >
      {props.value}
    </button>
  );
}
