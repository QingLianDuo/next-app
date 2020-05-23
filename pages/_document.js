// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet} from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
  	const sheet = new ServerStyleSheet()
  	const originalRenderPage = ctx.renderPage
  	try{
  		ctx.renderPage = (props) => originalRenderPage({
	  		enhanceApp: App => props=>sheet.collectStyles(<App {...props}/>),// _app.js导出的App 关键代码
	  		enhanceComponent: Component => Component,// page 下的页面
  	    })
  		const initialProps = await Document.getInitialProps(ctx)
    	return { ...initialProps, styles:(<>{initialProps.styles}{sheet.getStyleElement()}</>) }
  	}finally{
  		sheet.seal()
  	}
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } .custom_class{font-size:18px;} /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}