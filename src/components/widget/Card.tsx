import { ShoppingCart, Star } from '@phosphor-icons/react';
import React from 'react'
import picture from '../../assets/highlight-coffe.png'

interface CardProps {
    Rating: number;

    title: string;
    price: number;
    description: string;
}

const Card: React.FC<CardProps> = ({
    Rating,
 
    title,
    price,
    description
}) => {
  return (
    <div className='shadow-2xl  p-6 bg-white rounded-2xl'>
        <div className='relative'>
            <p className='absolute top-0 left-0 text-xs font-poppins font-bold flex gap-2'>{Rating} <Star size={20} weight='fill' className='text-[#FF902B]'/></p>
            <img src={picture} alt="" width={200} />
        </div>
      <div className='flex justify-between'>
        <p className='font-poppins font-bold'>{title}</p>
        <p className='font-poppins font-bold text-[#FF902B]'>{price}K</p>
      </div>

      <div className='flex justify-between'>
          <p className='font-poppins text-xs'>{description}</p>
          <div className='rounded-full bg-[#FF902B] p-2'>
            <ShoppingCart size={20} className='text-white' />
          </div>
      </div>

      <div className='flex gap-6'>
        <button className='px-4 py-1 rounded-3xl border shadow-lg transition-all duration-200 hover:shadow-red-600 text-red-600'>Hot</button>
        <button className='px-4 py-1 rounded-3xl border shadow-lg transition-all duration-200 hover:shadow-indigo-500 text-indigo-500'>Cold</button>
      </div>
    </div>
  )
}

export default Card;

