import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className='searchForm'>
            <input type='text' placeholder='Find User'></input>
        </div>
        <div className='userChat'>
            <img src='https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp'/>
            <div className='userChatInfo'>
                <span>Me</span>
            </div>
        </div>
    </div>
  )
}

export default Search