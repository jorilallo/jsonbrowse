import Head from 'next/head';
import { Flex } from 'reflexbox';
import { injectGlobal } from 'styled-components';
import styleSheet from 'styled-components/lib/models/StyleSheet'

import Header from './Header';

// styleSheet.reset();

injectGlobal`
body, html, #__next {
  margin: 0;
  height: 100%;

  font-family: system, -apple-system, BlinkMacSystemFont,
    "Helvetica Neue", "Lucida Grande";

  * {
    box-sizing: border-box;
  }
}

#__next {
  display: flex;
}
`;

export default (props) => (
  <Flex auto column>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500" rel="stylesheet" />
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
