import React from 'react';

export default function ContactItem({
  contact: { id, name, number },
  delMethod,
}) {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button id={id} type="button" onClick={delMethod}>
        Delete
      </button>
    </li>
  );
}
