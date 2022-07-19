const Login = () => {
  return (
    
    <div className="container">

      <form>
        <h2>Login</h2>
        <label>Email:</label>
        <input type="text" id = "email" name="email" placeholder="Please enter your email"></input>
        <br></br>
        <label>Password:</label>
        <input type="text" id = "pwd" name="pwd" placeholder="Please enter your password"></input>
        <br></br>
        <input type="submit" className="btn" value="Login"></input>
      </form>
    </div>
    
  )
}

export default Login