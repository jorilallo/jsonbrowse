import React from 'react';
import s from 'styled-components';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout';
import JsonInput from '../components/JsonInput';
import JsonBrowse from '../components/JsonBrowse';
import Error from '../components/Error';

import parseUri from '../utils/parseUri';

const DEFAULT_STATE = {
  mode: 'input',
  url: '',
  loading: false,
  json: null,
  error: null,
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
      // Clear state
      this.onClear();

      // Fetch pre-supplied or changed API url
      this.setState({ url: query.url }, () => {
        this.onUrlSubmit();
      });
    }
  }

  onUrlSubmit = async () => {
    this.setState({ loading: true });

    try {
      const { hostname } = parseUri(this.state.url);
      let url;
      const encodedUrl = encodeURIComponent(this.state.url);

      // Localhost should always bypass CORS proxy
      if (hostname === 'localhost') {
        url = this.state.url;
      } else {
        url = `https://proxy.jsonbrowse.com/${encodedUrl}`;
      }
      const res = await fetch(url);
      const data = await res.text();

      // Modify location to reflect fetched API url
      history.pushState(history.state, null, `?url=${encodedUrl}`);

      this.setState({
        mode: 'browse',
        json: data,
      });
    } catch (e) {
      // Handle error
      this.setState({
        loading: false,
        error: e.message,
      });
    }
  }

  onTextareaChange = (event) => {
    let error = false;
    const value = event.target.value;
    try {
      JSON.parse(value);

      this.setState({
        mode: 'browse',
        json: value,
        error: false,
      });
    } catch (e) {
      this.setState({ error: 'Unable to parse JSON' });
    }
  }

  onInputChange = (event) => {
    this.setState({ url: event.target.value });
  }

  onClear = () => {
    this.setState(DEFAULT_STATE);
  }

  onDismissError = () => {
    this.setState({ error: null });
  }

  render() {
    return (
      <Layout onClear={ this.onClear } isServer={ this.props.isServer }>
        { this.state.error && (
          <Error onClick={ this.onDismissError }>{ this.state.error }</Error>
        ) }
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
