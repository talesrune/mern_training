import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios"

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  let navigate = useNavigate(); 
  const registerUser = async(e)=> {
    e.preventDefault() //fix request aborted

    axios.post('http://localhost:4000/api/login/', { //register new account
      username: username,
      email: email,
      password: password
    })    
    .then(resp => {
      console.log(resp.data)
      if(resp.data.status === 'ok') {
        
			  alert('Register successful')
        navigate('/login');
      } else{
        alert('Please check your username, email and password, it could be duplicate email')
      }

    })
    .catch(function (error) {
      console.log(error);
    });
	}

  const goLogin = async()=> {
    navigate('/login');
  }

  return (
    
    <div className="container">

      <form onSubmit={registerUser}>
        <h2>Register</h2>
        <label>Username:</label>
        <input type="text" name="username" placeholder="Please enter new username" onInput={e => setUsername(e.target.value)}></input>
        <br></br>
        <label>Email:</label>
        <input type="text" name="email" placeholder="Please enter your email" onInput={e => setEmail(e.target.value)}></input>
        <br></br>
        <label>Password:</label>
        <input type="text" name="pwd" placeholder="Please enter new password" onInput={e => setPassword(e.target.value)}></input>
        <br></br>
        <input type="submit" className="btn" value="Register"></input>
        <input type="button" className="btn" value="Back to Login" onClick={goLogin}></input>
      </form>
    </div>
    
  )
}

export default Register