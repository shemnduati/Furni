import React from 'react';
import { FaPlus } from 'react-icons/fa';


const ProductCard = ({image, name, price}) => {
  return (
    <div className='rounded-2xl bg-gray-100 hover:bg-blue-100/80 relative  duration-300 group max-w-[400px]'>
        <img src={image} alt={name} className='max-w-[250px] group-hover:scale-105 block mx-auto transform -translate-y-36 object-cover' />
        <div className='p-4 place-items-center space-y-2 transform -translate-y-20'>
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