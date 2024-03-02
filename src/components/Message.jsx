import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src='https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp' alt='image'/>
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p>Hey!!</p>
        <img src='https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp' alt='profile'/> 
      </div>
    </div>
  )
}

export default Message