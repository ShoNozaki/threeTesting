import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStleSheet, injectGlobal } from 'styled-components';


export default class MyDocument extends Document {

  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body>
        <div className="root">{main}</div>
        <NextScript />
        </body>
      </html>
    )
  }
}