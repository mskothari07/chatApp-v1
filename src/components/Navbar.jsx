import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Session Chat</span>
        <div className='user'>
            <img src='https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp' alt='DP'/>
            <span>Meet</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar