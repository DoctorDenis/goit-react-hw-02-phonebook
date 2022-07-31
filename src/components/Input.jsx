import React from 'react';
import styled from 'styled-components';

export default function Input({
  className,
  type,
  name,
  value,
  onChange,
  pattern,
  title,
}) {
  return (
    <input
      className={className}
      type={type}
      name={name}
      value={value}
      id={name}
      onChange={onChange}
      pattern={pattern}
      title={title}
      required
    />
  );
}

export const StyledInput = styled(Input)`
  margin-bottom: 1rem;
  margin-top: 5px;
  padding: 5px 20px;
  font-size: 15pt;
  border-radius: 5px;
  box-shadow: inset 0px 0px 5px #7f8897;
`;
