import lodash from 'lodash';
import { Flex } from 'reflexbox';
import { injectGlobal } from 'styled-components';

import Header from './Header';

import '../utils/ascii';

// Expose lodash for developers when rendering clientside
if (global.window) {
  window._ = lodash; // eslint-disable-line
}

export default props => (
  <Flex auto column style={{ width: '100%' }}>
    <Header { ...props } />
    <Flex auto column style={{ overflow: 'scroll' }}>
      { props.children }
    </Flex>
  </Flex>
);

injectGlobal`
body, html, #__next {
  margin: 0;
  height: 100%;
}

#__next {
  font-family: 'Source Code Pro', 'Courier', monospace;
  font-size: 16px;
  font-weight: 400;
}

input, textarea, select, button {
  font-family: 'Source Code Pro', 'Courier', monospace;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #36a5fd;
}

p {
  font-size: 14px;
}

#__next {
  display: flex;
}
`;
