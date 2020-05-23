import React,{useState, useEffect, useReducer, memo, useMemo, useCallback} from 'react'


function countReducer(state,action){
	switch(action.type){
		case 'add':
		    return state+1
		case 'minus':
			return state-1
		default:
			return state    
	}
}

function MyCountFun(){
	// const [count,setCount]=useState(0)
	const [count, dispatchCount]=useReducer(countReducer,0)
	const [name,setName]=useState('majy')
	// useEffect(()=>{
	// 	let interval = setInterval(()=>{
	// 		dispatchCount({type:'minus'})
	// 		// setCount(count=>count+1)
	// 	},1000)

	// 	return ()=>clearInterval(interval)
	// },[])
	//dom更新到节点之后 useLayoutEffect更新之前
	useEffect(()=>{
		console.log("useEffect init")
		return ()=>{
			console.log("useEffect detach")
		}
	},[name])// 传入的值有变化才会重新执行useEffect里的事情,每次name变化会重新卸载初始化操作
	// 优化前
    // const config = {
    // 	text:`count is ${count}`,
    // 	color:count>3?'red':'blue'
    // }
    // 优化后
    const config = useMemo(()=>({
    	text:`count is ${count}`,
    	color:count>3?'red':'blue'
    }),[count])

    const handleButtonClick = useCallback(()=>dispatchCount({type:'add'}),[count])

	return (
		<div>
			<input value={name} onChange={e=>setName(e.target.value)}/>
			<button onClick={()=>dispatchCount({type:'minus'})}>{count}</button>
			<Child config={config} onButtonClick={handleButtonClick}/>
		</div>
	)
}
// 每次传入参数变化都要重新渲染，担忧的变化和该组件无关，应该有话
const Child = memo(function Child({onButtonClick,config}){
	console.log('child render')
	return (
		<button onClick={onButtonClick} style={{color: config.color}}>{config.text}</button>
	)
})

export default MyCountFun