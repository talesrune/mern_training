const Register = () => {
  return (
    
    <div className="container">

      <form>
        <h2>Register</h2>
        <label>Username:</label>
        <input type="text" id = "username" name="username" placeholder="Please enter new username"></input>
        <br></br>
        <label>Email:</label>
        <input type="text" id = "email" name="email" placeholder="Please enter your email"></input>
        <br></br>
        <label>Password:</label>
        <input type="text" id = "pwd" name="pwd" placeholder="Please enter new password"></input>
        <br></br>
        <input type="submit" className="btn" value="Register"></input>
      </form>
    </div>
    
  )
}

export default Register