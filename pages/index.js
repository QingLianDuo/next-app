
import '../public/index.less'
import { Button } from 'antd'
import Link from 'next/link'
import Router from 'next/router'
import {add,addAsync} from '../store/store'
import {connect} from 'react-redux'


const events = [
	'routeChangeStart',
	'routeChangeCompolete',
	'routeChangeError',
	'beforeHistoryChange',
	'hashChangeStart',
	'hashCHangeCompolete'
]

function makeEvent(type){
 return (...args)=>{
 	console.log(type,...args)
 }
}
events.forEach((event)=>{
	Router.events.on(event,makeEvent(event))
})

function gotoPage(){
	Router.push({
		pathname:'/other',
		query:{
			id:1
		}
	})
}

const Index = (props) =>{
	const {counter,username,stars,add,updateUserName}=props
	return (
		<div>
			Next stars: {stars}
			<Link href="/other?id=2" as="/other/2">
				<Button type="primary">Primary</Button>
			</Link>
		    <Button onClick={gotoPage}>Default</Button>
		    <Button type="dashed">Dashed</Button>
		    <Button type="link" onClick={()=>add(2)}>change username</Button>
		    <input type="text" onChange={(e)=>updateUserName(e.target.value)}/>
		    <div>
				count:{counter},username:{username}
		    </div>
		</div>
	)
}

  

Index.getInitialProps = async (ctx) => {
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json()
  // return { stars: json.stargazers_count }
  const {reduxStore}=ctx
  reduxStore.dispatch(add(3))
  return { stars: 200 }
}
// 还没有和nextjs集成
export default connect(function mapStateToProps(state){
	return {
		counter: state.counter.count,
		username:state.user.username
	}
},function mapDispatchToProps(dispatch){
	return {
		add:(num) => dispatch({type:'add',num:num}),
		updateUserName:(name)=>dispatch({type:"UPDATE_USER",user:name})
	}
})(Index)