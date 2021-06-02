import axios from 'axios'
export const client  = axios.create({ baseURL: 'http://localhost:4001'})

/*client.intercepters.request.use(config=>{
	config.headers = client_config.headers
	config.baseURL = client_config.baseURL
	return config
})*/

export function getCookie(name){
	const value ='; ' + document.cookie
	const parts = value.split('; ' +name+'=')
	if(parts.length === 2) return parts.pop().split(';').shift()
	return null
}

export const client_config = {
	headers: {},
	baseURL: 'http://localhost:4001'
}

export const updateClientConfig=(obj)=>{
	client_config.headers['Authorization'] = 'Bearer ' + obj.token
	client.intercepters.request.use(config=>{
		config.headers = client_config.headers
		config.baseURL = client_config.baseURL
		return config
	})
}