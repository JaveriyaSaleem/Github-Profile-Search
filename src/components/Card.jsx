import React from 'react'
import { useEffect } from 'react'

const Card = (props) => {
  return (
    <div className="bg-[#ffffff] flex flex-col md:flex-row justify-center items-center md:items-start rounded-lg py-10 px-2 mb-5 mx-2">  
      {/* img of profile  */}
<figure className='px-10'><img src={props.src} alt="" className='border rounded-full p-2 w-[120px]'/></figure>  
{/* profile details  */}
      <div className='md:w-[30rem] flex flex-col items-center md:items-start gap-3'>
        <h1 className='font-medium text-[24px]'>{props.name}</h1>
        <h3 className='text-[16px]'>{props.bio}</h3>
        <div className='grid grid-cols-3 gap-4'>
         <p className='flex gap-1'><span>{props.followers}</span><span className='font-medium'>Followers</span></p>
         <p className='flex gap-1'><span >{props.following}</span><span className='font-medium'>
         Following</span></p>
         <p className='flex gap-1'><span>{props.repos}</span><span className='font-medium'>Repos</span></p>
        </div>
        <div className='flex flex-wrap justify-center md:justify-start gap-2'>
          <p className='bg-black text-white md:inline-block px-2 rounded'>{props.repo1}</p>
          <p className='bg-black text-white md:inline-block px-2 rounded'>{props.repo2}</p>
          <p className='bg-black text-white md:inline-block px-2 rounded'>{props.repo3}</p>
          <p className='bg-black text-white md:inline-block px-2 rounded'>{props.repo4}</p>
          <p className='bg-black text-white md:inline-block px-2 rounded'>{props.repo5}</p>
        </div>
      </div>   

    </div>

    
  )
}

export default Card
