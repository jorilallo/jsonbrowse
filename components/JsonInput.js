import { Component, PropTypes } from 'react';
import { Flex } from 'reflexbox';
import fetch from 'isomorphic-fetch';
import s from 'styled-components';

import Input from './Input';

export default class extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  state = {
    error: false,
    input: null,
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onSubmit = async (event) => {
    event.preventDefault();
    // TODO: Loading and error states
    const res = await fetch(this.state.input);
    const data = await res.text();
    this.props.onChange(data);
  }

  onChange = (event) => {
    let error = false;
    const value = event.target.value;
    try {
      if (value) JSON.parse(value);
      this.props.onChange(value);
    } catch (e) {
      error = true;
    }
    this.setState({ error });
  };

  render() {
    return (
      <Flex column auto>
        <form onSubmit={ this.onSubmit }>
          <Input
            name="url"
            placeholder="Enter request URL here"
            onChange={ this.onInputChange }
          />
        </form>
        <TextArea
          placeholder="...or paste JSON here"
          onChange={ this.onChange }
          error={ this.state.error }
        />
      </Flex>
    );
  }
};

const placeholderColor = '#9ad0ff';

const TextArea = s.textarea`
  display: flex;
  flex: 1;

  padding: 16px;
  width: 100%;
  border: 2px solid ${ props => props.error ? 'red' : 'transparent' };
  outline: none;
  resize: none;

  font-size:  14px;
  font-family: 'Source Code Pro', monospace;

  &:focus {

  }

  &::-webkit-input-placeholder {
   color: ${ placeholderColor };
  }

  &:-moz-placeholder { /* Firefox 18- */
   color: ${ placeholderColor };
  }

  &::-moz-placeholder {  /* Firefox 19+ */
   color: ${ placeholderColor };
  }

  &:-ms-input-placeholder {
   color: ${ placeholderColor };
  }
`;
