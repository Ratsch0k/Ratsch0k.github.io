import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="h-full m-0" >
        <Head />
        <body className="h-full bg-primary text-white m-0 p-0">
          <Main />
          <NextScript />
          <style jsx global>
            {
              `
              #__next {
                height: 100%;
              }
              `
            }
          </style>
        </body>
      </Html>
    )
  }
}

export default MyDocument