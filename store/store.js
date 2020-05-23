import {createStore,combineReducers,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState = {
	count: 0
}
const userInitialState = {
	username:'majy',
	age: 30
}
const ADD = 'add'
const UPDATE_USER="UPDATE_USER"
// 纯函数，没有副作用
// 有任何更新都要返回新的对象
// 可以通过 combineReducers合并
function countReducer(state=initialState,action){
	console.log(state,action)
	switch(action.type){
		case ADD:
			return {...state, count:state.count+(action.num||1)}
		default:
			return state
	}
}
function userReducer(state=userInitialState,action){
	console.log(state,action)
	switch(action.type){
		case UPDATE_USER:
			return {...state, username:action.user}
		default:
			return state
	}
}

const reducer = combineReducers({
	counter: countReducer,
	user: userReducer
})



// action creater
export function add(num){
	return {
		type:ADD,
		num
	}
}
// async action creater
export function addAsync(num){
	return (dispatch,getState)=>{
		setTimeout(()=>{
			dispatch(add(num))
		},1000)
	}
}


// store.subscribe(()=>{
// 	console.log('changed',store.getState())
// })

// store.dispatch(add(3))
// store.dispatch(addAsync(4))
// store.dispatch({type:'add'})
// store.dispatch({type:'UPDATE_USER',user:'ghge'})
// 这种方式store有重用的风险
// export default store
export default function initiallizeStore(state){
	const store = createStore(
		reducer,
		Object.assign({},{
			counter: initialState,
			user: userInitialState
		},state),
		composeWithDevTools(applyMiddleware(ReduxThunk))
	)
	return store
}