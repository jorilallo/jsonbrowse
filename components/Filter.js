import { Component, PropTypes } from 'react';
import s from 'styled-components';

import Input from './Input';

const FILTER_REGEX = /^(\.?[\w-]*(\[\d+\])?)(\.[\w-]*(\[\d+\])?)*$/

export default class extends Component {
  static propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  onChange = (event) => {
    const value = event.target.value;
    if (value.match(FILTER_REGEX)) {
      this.props.onChange(value);
    }
  }

  render() {
    return (
      <Input
        onChange={ this.onChange }
        placeholder="Filter"
        autoFocus
      />
    );
  }
}
