import React from 'react';
import s from 'styled-components';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout';
import JsonInput from '../components/JsonInput';
import JsonBrowse from '../components/JsonBrowse';

const DEFAULT_STATE = {
  mode: 'input',
  url: '',
  loading: false,
  json: null,
};

export default class extends React.Component {
  state = DEFAULT_STATE

  static async getInitialProps ({ req, query }) {
    let initialUrl;
    if (query.url) {
      initialUrl = decodeURIComponent(query.url);
    }
    return {
      initialUrl,
      isServer: !!req,
    }
  }

  componentDidMount = () => {
    const { initialUrl } = this.props;
    if (initialUrl) {
      this.setState({ url: initialUrl }, () => {
        this.onUrlSubmit();
      });
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const { query } = nextProps.url;
    if (query && query.url && query.url !== this.state.url) {
      // Fetch pre-supplied API url
      this.setState({ url: query.url }, () => {
        this.onUrlSubmit();
      });
    }
  }

  onUrlSubmit = async () => {
    this.setState({ loading: true });

    try {
      const url = `https://proxy.jsonbrowse.com/${encodeURIComponent(this.state.url)}`;
      const res = await fetch(this.state.url);
      const data = await res.text();

      this.setState({
        mode: 'browse',
        json: data,
      });
    } catch (e) {
      // Handle error
      console.error(e)
      this.setState({ loading: false });
    }
  }

  onTextareaChange = (event) => {
    let error = false;
    const value = event.target.value;
    try {
      if (value) JSON.parse(value);

      this.setState({
        mode: 'browse',
        json: value,
        error: false,
      });
    } catch (e) {
      this.setState({ error: true });
    }
  }

  onInputChange = (event) => {
    this.setState({ url: event.target.value });
  }

  onClear = () => {
    this.setState(DEFAULT_STATE);
  }

  render() {
    return (
      <Layout onClear={ this.onClear } isServer={ this.props.isServer }>
        { this.state.mode === 'input' && (
          <JsonInput
            onTextareaChange={ this.onTextareaChange }
            onUrlSubmit={ this.onUrlSubmit }
            onInputChange={ this.onInputChange }
            url={ this.state.url }
            loading={ this.state.loading }
          />
        ) }
        { this.state.mode === 'browse' && <JsonBrowse json={ this.state.json } />}
      </Layout>
    );
  }
};
