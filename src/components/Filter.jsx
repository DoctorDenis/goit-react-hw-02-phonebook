import React from 'react';
import styled from 'styled-components';

export function Filter({ onChange, value }) {
  return (
    <>
      <p>Find contacts by name</p>
      <StyledInput
        type="text"
        name="query"
        value={value}
        onChange={onChange}
        id="query"
      />
    </>
  );
}

const StyledInput = styled.input`
  padding: 5px;
  border: 2px solid grey;
  &:focus {
    border: 2px solid skyblue;
    outline: 1px solid skyblue;
  }
`;
