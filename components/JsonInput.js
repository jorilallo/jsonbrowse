import { Component, PropTypes } from 'react';
import { Flex } from 'reflexbox';
import s from 'styled-components';

import Input from './Input';

export default class extends Component {
  static propTypes = {
    onUrlSubmit: PropTypes.func.isRequired,
    onTextareaChange: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
  }

  state = {
    error: false,
  }

  onUrlSubmit = (event) => {
    event.preventDefault();
    this.props.onUrlSubmit();
  }

  render() {
    return (
      <Flex column auto>
        <form onSubmit={ this.onUrlSubmit }>
          <Input
            name="url"
            value={ this.props.url }
            placeholder="Enter API request URL here"
            onChange={ this.props.onInputChange }
            loading={ this.props.loading }
          />
        </form>
        <TextArea
          placeholder="...or paste JSON directly here"
          onChange={ this.props.onTextareaChange }
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

  font-size:  16px;

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
