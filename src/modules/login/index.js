import React, {useState, useEffect} from 'react'
import {connect}from 'react-redux';
import { login, logout} from './action'
import {updateClientConfig} from '../../http/ajax'

function Login(props) {
	const [username,setUsername] =useState('');
	const [password, setPassword] = useState('');
	const [showToast, setShowToast] = useState(false)
	//let {from} = props.location.state || {from: {pathname:'/dashboard'}};
	const login = () =>{
		props.login(username,password);
	}
	useEffect(()=>{
		if(props.loggedIn){
			updateClientConfig(props.user_info.toJS())
			showToastMessage();
		}
		
	},[props.loggedIn])
	
	function showToastMessage(){
		setShowToast(true)
		setTimeout(()=>{setShowToast(false)}, 4000)
	}
	
    return (
<div>  
	<div className="container">
	<div className="row justify-content-center">
	<div className="col-xl-10 col-lg-12 col-md-9">
	<div className="card o-hidden border-0 shadow-lg my-5">
	<div className="card-body p-0">					  
	<div className="row">              
		<div className="col-lg-6">
			<div className="p-5">
			<div className="text-center">
			<h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
			</div>
			<div className="form-group">
			<input type="email" className="form-control form-control-user" value={username} onChange={(e)=> setUsername(e.target.value)} 
			id="exampleInputEmail" placeholder="Enter Email Address..."/>
			</div>
			<div className="form-group">
			<input type="password" className="form-control form-control-user" value={password} onChange={(e)=> setPassword(e.target.value)}
			id="exampleInputPassword" placeholder="Password"/>
			</div>
			<div className="form-group">
			<div className="custom-control custom-checkbox small">
			<input type="checkbox" className="custom-control-input" id="customCheck"/>
			<label className="custom-control-label" for="customCheck">Remember Me</label>
			</div>
			</div>
			<a href="index.html" className="btn btn-primary btn-user btn-block" onClick={login}>
			Login
			</a>
			<hr/>
			<a href="index.html" className="btn btn-google btn-user btn-block">
			<i className="fab fa-google fa-fw"></i> Login with Google
			</a>
			<a href="index.html" className="btn btn-facebook btn-user btn-block">
			<i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
			</a>
			<hr/>
			<div className="text-center">
			<a className="small" href="forgot-password.html">Forgot Password?</a>
			</div>
			<div className="text-center">
			<a className="small" href="register.html">Create an Account!</a>
			</div>
			</div>
		</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
</div>
    )
}
function mapStateToProps(state){
	return {
		user_info:state.LoginReducer.getIn(['user_info']),
		loggedIn:state.LoginReducer.getIn(['loggedIn'],false),
		loading:state.LoginReducer.getIn(['loading'], true),
		error:state.LoginReducer.getIn(['error'])
	}
}
export default connect(mapStateToProps, {login, logout})(Login)