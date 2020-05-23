import React from 'react'
import App from 'next/app'
import {Provider} from 'react-redux'
import 'antd/dist/antd.less'
import withRedux from '../components/with-redux'

class MyApp extends App{
	static async getInitialProps(ctx){
		const {Component} = ctx
		let pageProps = {}
		if(Component.getInitialProps){
			pageProps = await Component.getInitialProps(ctx)
		}
		return {
			pageProps
		}
	}
	render() {
		console.log("my app init")
		const {Component,pageProps,reduxStore}=this.props
		return (
			<Provider store={reduxStore}>
				<Component {...pageProps}/>
			</Provider>
		);
	}
}
export default withRedux(MyApp)