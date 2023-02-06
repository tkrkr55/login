import React from 'react'

export default function User({user:{photoURL,displayName}}) {

  return (
    // shrink -0 는 이미지를 더이상 줄어들게 하지마 라는 뜻
    <div className='flex items-center shrink-0'>
      <img className='w-10 h-10 rounded-full mr-2' src={photoURL} alt={displayName}/>
      <span className='hidden md:block'>{displayName}</span>
    </div>
  )
}
