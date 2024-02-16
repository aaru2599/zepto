import React from 'react'

const CardButton = () => {
  return (
    <>
    <div className='flex h-[32px] items-center justify-between border-2 border-btnBorder bg-btnBack rounded-full '>
    <button className='font-bold px-2  text-white border-r-2 text-[0.7rem] border-btnBorder '>-</button>        
    <div className='font-bold px-2 text-[0.7rem] text-white'>1</div>
    <button className='font-bold px-2  border-l-2 text-[0.7rem] text-white border-btnBorder'>+</button>
    </div>
    </>
  )
}

export default CardButton