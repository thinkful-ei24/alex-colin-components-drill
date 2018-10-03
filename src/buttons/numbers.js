import React from 'react';

export default function NumberButtons(props) {
  return <button
    onClick={() => props.onClick(props.value)}
    id={props.id}
    value={props.value}>
      {props.value}
  </button>;
}
