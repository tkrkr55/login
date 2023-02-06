import React from 'react'

export default function Button({text,onClick}) {
  return (
    <button className='py-2 px-4' onClick={onClick}>
      {text}
    </button>
  )
}
