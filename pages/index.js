import React from 'react';
import Head from 'next/head';
import s from 'styled-components';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout';
import JsonInput from '../components/JsonInput';
import JsonBrowse from '../components/JsonBrowse';

export default class extends React.Component {
  state = {
    mode: 'input',
    json: null,
  }

  componentDidMount = async () => {
    // Temp
    const res = await fetch('https://api.github.com/repos/stedolan/jq/commits/54b9c9bdb225af5d886466d72f47eafc51acb4f7')
    const json = await res.text();
    this.setState({
      json,
      mode: 'browse',
    })
  }

  onInputChange = (json) => {
    this.setState({
      mode: 'browse',
      json,
    });
  }

  render() {
    return (
      <Layout>
        { this.state.mode === 'input' && <JsonInput onChange={ this.onInputChange } /> }
        { this.state.mode === 'browse' && <JsonBrowse json={ this.state.json } />}
      </Layout>
    );
  }
};
