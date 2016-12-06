import Head from 'next/head';
import lodash from 'lodash';
import { Flex } from 'reflexbox';
import { injectGlobal } from 'styled-components';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import Header from './Header';

import '../utils/ascii';

// Expose lodash for developers when rendering clientside
if (global.window) {
  window._ = lodash; // eslint-disable-line
}

injectGlobal`
body, html, #__next {
  margin: 0;
  height: 100%;

  font-family: 'Source Code Pro', monospace;
  font-weight: 400;
}

input, textarea, keygen, select, button {
  font-family: 'Source Code Pro', monospace;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

#__next {
  display: flex;
}
`;

export default (props) => (
  <Flex auto column>
    <Head>
      <title>json.browse()</title>
      <link rel="icon" type="image/png" href="static/favicon.png" />
      <link href="static/css/fonts.css" rel="stylesheet" />
      <link href="static/css/codemirror.css" rel="stylesheet" />
      <style>
        { !process.env.browser &&
          styleSheet.rules().map(rule => rule.cssText).join('\n') }
      </style>
    </Head>
    <Header { ...props } />
    <Flex auto>
      { props.children }
    </Flex>
  </Flex>
);
