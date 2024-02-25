import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Session Chat : Meet Privacy</span> <br/>
            <span className='title'>Login</span>
            <form>
                <input placeholder='Enter your email' type='email'></input>
                <input placeholder='Enter your password' type='password'></input>
                <button>Let's Go</button>
            </form>
            <p>New here? Dont worry Register yourself</p>
        </div>
    </div>
  )
}
export default Login