import Document, { Head, Main, NextScript } from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage();
    const style = styleSheet.rules().map(rule => rule.cssText).join('\n');
    return { ...page, style };
  }

  render() {
    return (
      <html>
        <Head>
          <title>json.browse</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />

          <meta
            name="description"
            content="Browse, filter and manipulate your JSON inside the browser"
          />
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <link rel="stylesheet" type="text/css" href="/static/css/fonts.css" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:title" content="json.browse" />
          <meta
            property="og:description"
            content="Browse, filter and manipulate your JSON inside the browser"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jsonbrowse.com" />
          <meta property="og:image" content="static/images/jsonbrowse.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
