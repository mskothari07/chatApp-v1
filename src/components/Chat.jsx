import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Meet</span>
        <div className='chatIcons'>
          <img src='src\assets\img\add.png' alt='add' />
          <img src='src\assets\img\more.png' alt='option' />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat