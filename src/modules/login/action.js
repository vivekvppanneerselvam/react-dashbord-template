import axios from 'axios'
import {history} from '../../app/helpers'
export const login = (username, password) =>{
	let obj ={
		username : username,
		password: password
	}
	return dispatch =>{
		localStorage.removeItem('user')
		dispatch({type: 'LOGIN_LOADING', loading: true})
		return axios({
			method:'post',
			url:'v1/auth/login',
			data:obj,
			headers :{'Content-Type': 'application/x-www.form-urlencoded'},
			withCredentials:true,
			transformRequest:getQueryString
		}).then((res)=>{
			history.push('/home');
			localStorage.setItem('user',JSON.stringify(res.data));
			return dispatch({type: 'LOGIN_SUCCESS', user_info: res.data, loading:false})		
		}).catch(err=>{
			dispatch({type: 'LOGIN_FAILURE', error:err, loading:true})		
		})
	}
}

export const logout=()=>{
	history.push('/login');
	localStorage.removeItem('user');
	return dispatch=>{dispatch({type: 'LOGOUT', loading:false})}
}

function getQueryString(data={}){
	return Object.entries(data)
		.map(([key,value])=>`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
		.join('&');
}