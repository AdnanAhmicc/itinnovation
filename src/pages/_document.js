import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="keywords" content="ItInnovation Technology" />
          <meta name="description" content="ItInnovation Provide digital soultions" />
          <meta name="author" content="Nuzair" />
          <link rel="shortcut icon" href="/assets/images/logo-icon.png" title="Favicon" sizes="16x16" />

          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap" rel="stylesheet" />

          <link rel="stylesheet" href="/assets/css/lib/bootstrap-icons.css" />
          <link rel="stylesheet" href="/assets/css/lib/all.min.css" />
          <link rel="stylesheet" href="/assets/css/lib/animate.css" />
          <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />

        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
