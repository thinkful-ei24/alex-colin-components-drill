import React from 'react';

export default function NumberButtons(props) {
  return <button onClick={() => props.onClick(props.id)}  id={props.id}>{props.id}</button>;
}
