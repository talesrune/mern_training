const Register = () => {
  return (
    
    <div className="container">

      <form>
        <h2>Register</h2>
        <label for="username">Username:</label>
        <input type="text" id = "username" name="username" placeholder="Please enter new username"></input>
        <tr></tr>
        <label for="email">Email:</label>
        <input type="text" id = "email" name="email" placeholder="Please enter your email"></input>
        <tr></tr>
        <label for="pwd">Password:</label>
        <input type="text" id = "pwd" name="pwd" placeholder="Please enter new password"></input>
        <input type="submit" className="btn" value="Register"></input>
      </form>
    </div>
    
  )
}

export default Register