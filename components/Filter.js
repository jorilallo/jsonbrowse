import { Component, PropTypes } from 'react';
import s from 'styled-components';

const FILTER_REGEX = /^(\.?[\w-]*(\[\d+\])?)(\.[\w-]*(\[\d+\])?)*$/

export default class extends Component {
  static propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  onChange = (event) => {
    const value = event.target.value;
    if (value.match(FILTER_REGEX)) {
      console.log(true);
      this.props.onChange(value);
    }
  }

  render() {
    return (
      <Input onChange={ this.onChange } autoFocus placeholder="Filter"/>
    );
  }
}

const placeholderColor = 'rgb(159, 212, 255)';

const Input = s.input`
  padding: 8px 20px;
  width: 100%;

  background-color: rgb(54, 165, 253);
  border: none;
  outline: none;

  color: #FFFFFF;
  font-size: 16px;

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
