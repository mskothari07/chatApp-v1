import React from 'react'

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type your message'/>
      <div className='send'>
        <img src='src\assets\img\addImage.png' alt='add image'/>
        <input type='file' style={{display:"none"}} id='file'/>
        <button>Send</button>
      </div>

    </div>
  )
}

export default Input