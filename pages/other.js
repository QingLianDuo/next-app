import { withRouter } from 'next/router'

// import Page from '../components/page'

import styled from 'styled-components'

import dynamic from 'next/dynamic'

// import moment from 'moment'
// 执行渲染的时候才去加载Page组件
const Page = dynamic(import('../components/page'))

const Title = styled.h1`
	color: orange;
	font-size:36px;
`

const Other = ({ router,stars, time }) =>{
	// amp时自带固定的
	const query = router.query.amp?router.query.amp:router.query
	console.log(router)
	return (
		<>
		<Title>这是标题{time}</Title>
		 <div>
		    Next stars: 
		    {query.id}
		    <Page stars={stars}/>
		  </div>
		  <style jsx>{`
			div{
				color:blue;
			}
		`}</style>
		</>  
	)
}

Other.getInitialProps = async ({ req }) => {
  const moment = await import("moment")	// 为什么不能import
  // const moment = require('moment');
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  //const json = await res.json()
  return { 
  	stars: 900,
  	time: moment.default(Date.now()-60*1000).fromNow()
  }
} 



export default withRouter(Other)