import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Session Chat : Meet Privacy</span> <br/>
            <span className='title'>Register</span>
            <form>
                <input placeholder='Enter Your Username'></input>
                <input placeholder='Enter your email' type='email'></input>
                <input placeholder='Enter your password' type='password'></input>
                <input style={{display:"none"}} type='file' id='file'></input>
                <label htmlFor='file'> <img src='src\assets\img\profile.png' alt='profilePicture'/><span>Add your profile picture</span></label>
                <button>Let's Register it</button>
            </form>
            <p>Already registered? Login</p>
        </div>
    </div>
  )
}

export default Register