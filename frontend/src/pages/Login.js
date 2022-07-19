import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios"

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate(); 
  const loginUser = async(e)=> {
    e.preventDefault() //fix request aborted

    // axios({
    //   method: 'post', //you can set what request you want to be
    //   url: 'http://localhost:4000/api/login/check',
    //   data: {email: email,
    //           password:password},
    // headers: {
    //   'Content-Type': 'application/json'
    // }
    // })
    axios.post('http://localhost:4000/api/login/check', {
      email: email,
      password: password
    })    
    .then(resp => {
      console.log(resp.data)
      if(resp.data.user) {
        localStorage.setItem('token', resp.data.user)
			  alert('Login successful')
        navigate('/');
      } else{
        alert('Please check your email and password')
      }

    })
    .catch(function (error) {
      console.log(error);
    });
	}

  const goRegister = async()=> {
    navigate('/register');
  }

  return (
    
    <div className="container">

      <form onSubmit={loginUser}>
        <h2>Login</h2>
        <label>Email:</label>
        <input type="text" name="email" placeholder="Please enter your email" /*value={email}*/ onInput={e => setEmail(e.target.value)}></input>
        <br></br>
        <label>Password:</label>
        <input type="text" name="pwd" placeholder="Please enter your password" /*value = {password}*/ onInput={e => setPassword(e.target.value)}></input>
        <br></br>
        <input type="submit" className="btn" value="Login"></input>
        <input type="button" className="btn" value="Register new" onClick={goRegister}></input>
      </form>
      
    </div>
    
  )
}

export default Login