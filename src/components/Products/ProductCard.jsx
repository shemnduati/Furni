import React from 'react';
import { FaPlus } from 'react-icons/fa';


const ProductCard = ({image, name, price}) => {
  return (
    <div className='rounded-2xl hover:bg-primary/5 relative  duration-300 mt-20 group max-w-[600px] gap-4'>
        <img src={image} alt={name} className='max-w-[300px] group-hover:scale-105  transition-transform ease-out block mx-auto transform -translate-y-40 object-cover' />
        <div className='p-4 place-items-center space-y-2 -mt-32'>
            <h3 className='text-gray-700 text-lg font-semibold'>{name}</h3>
            <p className='font-bold'>Ksh{price}</p>
            <button className=' group-hover:bg-gray-700 transform translate-y-10 rounded-full items-center text-white font-bold py-4 px-4'>
                <FaPlus />
            </button>
        </div>
    </div>
  )
}

export default ProductCard