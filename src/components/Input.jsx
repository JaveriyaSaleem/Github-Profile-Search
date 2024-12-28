import React from 'react'

const Input = () => {
  return (
    <div className='border rounded overflow-hidden grid grid-cols-12 text-center w-96'>
    <input type="text" placeholder='Search a Github User'className='col-span-10 py-2 px-2'/>
    <button className='px-2 bg-[#06B6D4] col-span-2 text-white'>Search</button>
  </div>
  )
}

export default Input
