import Head from 'next/head';
import lodash from 'lodash';
import { Flex } from 'reflexbox';
import { injectGlobal } from 'styled-components';
import styleSheet from 'styled-components/lib/models/StyleSheet';
import FontFaceObserver from 'fontfaceobserver';

import Header from './Header';

import '../utils/ascii';

// Expose lodash for developers when rendering clientside
if (global.window) {
  window._ = lodash; // eslint-disable-line
}

export default class extends React.Component {
  componentDidMount = async () => {
    await new FontFaceObserver('Source Code Pro').load();
    document.documentElement.className += ' fonts-loaded';
  }

  render() {
    const css = this.props.isServer ? styleSheet.rules().map(rule => rule.cssText).join('\n') : '';

    return (
      <Flex auto column style={{ width: '100%' }}>
        <Head>
          <title>json.browse</title>
          <meta name="description" content="Browse, filter and manipulate your JSON inside the browser" />
          <link rel="icon" type="image/png" href="static/favicon.png" />
          <style dangerouslySetInnerHTML={{ __html: css }} />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:title" content="json.browse" />
          <meta property="og:description" content="Browse, filter and manipulate your JSON inside the browser" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jsonbrowse.com" />
          <meta property="og:image" content="static/images/jsonbrowse.png" />
        </Head>
        <Header { ...this.props } />
        <Flex auto column style={{ overflow: 'scroll' }}>
          { this.props.children }
        </Flex>
      </Flex>
    );
  }
};

injectGlobal`
body, html, #__next {
  margin: 0;
  height: 100%;

  font-family: 'Courier', monospace;
  font-size: 16px;
  font-weight: 400;
}

input, textarea, select, button {
  font-family: 'Courier', monospace;
}

.fonts-loaded body,
.fonts-loaded #__next,
.fonts-loaded input,
.fonts-loaded textarea,
.fonts-loaded select,
.fonts-loaded button {
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

@font-face {
  font-family: "Source Code Pro";
  src: url(/static/fonts/SourceCodePro-Regular.woff);
  font-weight: 400;
}

@font-face {
  font-family: "Source Code Pro";
  src: url(/static/fonts/SourceCodePro-Medium.woff);
  font-weight: 500;
}

@font-face {
  font-family: "Source Code Pro";
  src: url(/static/fonts/SourceCodePro-SemiBold.woff);
  font-weight: 600;
}

@font-face {
  font-family: "Source Code Pro";
  src: url(/static/fonts/SourceCodePro-Bold.woff);
  font-weight: 700;
}

@font-face {
  font-family: "Source Code Pro";
  src: url(/static/fonts/SourceCodePro-Italic.woff);
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: "Source Code Pro";
  src: url(/static/fonts/SourceCodePro-MediumItalic.woff);
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: "Source Code Pro";
  src: url(/static/fonts/SourceCodePro-SemiBoldItalic.woff);
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: "Source Code Pro";
  src: url(/static/fonts/SourceCodePro-BoldItalic.woff);
  font-weight: 700;
  font-style: italic;
}
`;
