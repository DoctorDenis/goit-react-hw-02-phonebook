import React from 'react';
import styled from 'styled-components';
import { StyledInput } from './Input';
import PropTypes from 'prop-types';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  onChangeEventHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = event => {
    this.props.onSubmit(event);
    event.target.reset();
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.onSubmitHandler}>
        <label htmlFor="name">Name</label>
        <StyledInput
          type="text"
          name="name"
          value={this.state.name}
          id="name"
          onChange={this.onChangeEventHandler}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <StyledInput
          id="number"
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.onChangeEventHandler}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
  /* border: 1px solid black; */
  border-radius: 10px;
  box-shadow: 0px 1px 8px 1px black;
  background-image: linear-gradient(#ffffff42, #ffffff26);
  padding: 2rem;
  display: flex;
  max-width: 450px;
  box-sizing: border-box;
  flex-direction: column;
  text-align: left;
  margin: 0 auto;
  &:focus-within {
    box-shadow: 0px 0px 1px 1px black;
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  width: fit-content;
  margin: 1rem auto 0;
  font-size: 1rem;
  border: none;
  background-color: #759091;
  color: white;
`;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contactsRef: PropTypes.array.isRequired,
};
