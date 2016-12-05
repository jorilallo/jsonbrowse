import { Component, PropTypes } from 'react';
import s from 'styled-components';

export default class extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  state = {
    error: false,
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
      <TextArea
        placeholder="Paste JSON here"
        onChange={ this.onChange }
        error={ this.state.error }
      >
      </TextArea>
    );
  }
};

const placeholderColor = '#b1a5ff';

const TextArea = s.textarea`
  padding: 16px;
  width: 100%;
  border: 2px solid ${ props => props.error ? 'red' : 'transparent' };
  outline: none;

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
