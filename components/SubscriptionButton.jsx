import React from 'react'

const SubscriptionButton = () => {
  return (
    <>
    <form action="" className='flex justify-between max-w-[500] scae-75 sm:scale-100 mx-auto mt-10 border border-blue-600'>
        <input type="email" placeholder='enter your email' className='pl-4 outline-none' />
        <button type="submit" className='border border-blue-500 py-4 px-4 sm:px-8 active:bg-blue-200 active:text-white'>subscribe</button>
    </form>
        
    </>
  )
}

export default SubscriptionButton