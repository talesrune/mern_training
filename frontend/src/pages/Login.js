const Login = () => {
  return (
    
    <div className="container">

      <form>
        <h2>Login</h2>
        <label for="email">Email:</label>
        <input type="text" id = "email" name="email" placeholder="Please enter your email"></input>
        <tr></tr>
        <label for="pwd">Password:</label>
        <input type="text" id = "pwd" name="pwd" placeholder="Please enter your password"></input>
        <input type="submit" className="btn" value="Login"></input>
      </form>
    </div>
    
  )
}

export default Login