import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html className="h-full m-0 overflow-hidden dark">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                const theme = window.localStorage.getItem('theme');
                
                if (theme === 'dark' || (theme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              `
            }}
          >
          </script>
        </Head>
        <body className="h-full transition-colors bg-background-light dark:bg-background-dark transition-colors text-primary-dark dark:text-white m-0 p-0">
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument