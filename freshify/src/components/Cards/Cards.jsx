import React from 'react'
import {FaHeart, FaPlus} from 'react-icons/fa'
import Button from "../Button/Button";

const Cards = ({image, name, price}) => {
  return (
    <div className='bg-zinc-100 p-4 mt-10 rounded-xl'>

        {/* card icons  */}
      <div className='flex justify-between'>
        <span className='text-3xl text-zinc-300 '>
            <FaHeart/>
        </span>
        <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-xl px-4 py-3 rounded-lg text-white'>
            <FaPlus/>
        </button>
      </div>
   {/* card image  */}
      <div className='w-full h-50 '>
        <img src={image} className='w-full h-full object-contain' />
      </div>
  {/* card content  */}
      <div className='text-center '>
        <h3 className='text-2xl font-semibold'>{name}</h3>
        <p className='text-2xl font-bold mt-4 mb-3'>{price}</p>
        <Button content="Shop Now"/>
      </div>
    </div>
  )
}

export default Cards
