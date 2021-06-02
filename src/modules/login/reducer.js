import {Map, fromJS} from 'immutable'
let user_info = JSON.parse(localStorage.getItem('user'));
const initialState = user_info ? fromJS({loggedIn: true, user_info}) : fromJS({loggedIn: false,user_info:{},
	loading:false
})


export default function LoginReducer(state = Map(initialState),action){
	switch(action.type){
		case 'LOGIN_LOADING':
			return state.setIn(['user_info'], fromJS(action.user_info))
				.setIn(['loggedIn'], false)
				.setIn(['loading'], true)
		case 'LOGIN_SUCCESS':
			return state.setIn(['user_info'], fromJS(action.user_info))
				.setIn(['loggedIn'], true)
				.setIn(['loading'], false)				
		case 'LOGIN_FAILURE':
			return state.deleteIn(['user_info'])
					.setIn(['error'], fromJS(action.user_info))
				.setIn(['loggedIn'], false)
				.setIn(['loading'], false)
		case 'LOGOUT':
			return state.deleteIn(['user_info'])
				.setIn(['loggedIn'], false)
		default:
			return state
	}
	
}