import { Component, PropTypes } from 'react';
import { Flex } from 'reflexbox';
import s from 'styled-components';

import filterJson from '../utils/filterJson';

import DataView from './DataView';
import Filter from './Filter';
import Copy from './Copy';

export default class extends Component {
  state = {
    filter: null,
    json: this.props.json,
  }

  setFilter = (filter) => {
    // Only set filter is it matches, otherwise keep previous output
    const filteredJson = filterJson(this.props.json, filter)

    if (filteredJson) {
      this.setState({
        json: filteredJson,
      });
    }
  };

  render() {
    return (
      <Container column auto style={{ width: '100%' }}>
        <Filter onChange={ this.setFilter } filter={ this.state.filter } />
        <DataView json={ this.state.json } />
        <Copy json={ this.state.json } />
      </Container>
    );
  }
}

const Container = s(Flex)`
  position: relative;
  flex-shrink: 0;
`;

const ValidNotice = s.div`
  padding: 8px 20px;
  background-color: rgb(54, 165, 253);
  color: #FFFFFF;
`;
