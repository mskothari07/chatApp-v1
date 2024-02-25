import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Session Chat : Meet Privacy</span> <br/>
            <span className='title'>New here? Dont worry Sign Up quicky and turn on Privacy</span>
            <form>
                <input placeholder='Enter Your Username'></input>
                <input placeholder='Enter your email' type='email'></input>
                <input placeholder='Enter your password' type='password'></input>
                <button>Let Create it!</button>
            </form>
            <p>Already chating in Privacy? <Link to="/Login">Go On!</Link></p>
        </div>
    </div>
  )
}

export default Register