import lodash from 'lodash';
import { Flex } from 'reflexbox';
import { injectGlobal } from 'styled-components';
import ReactGA from 'react-ga';

import Header from './Header';

import '../utils/ascii';

// Expose lodash for developers when rendering clientside
if (global.window) {
  window._ = lodash; // eslint-disable-line
}

export default class extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-89359604-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <Flex auto column style={{ width: '100%' }}>
        <Header { ...this.props } />
        <Flex auto column style={{ overflow: 'scroll' }}>
          { this.props.children }
        </Flex>
      </Flex>
    );
  }
}

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
