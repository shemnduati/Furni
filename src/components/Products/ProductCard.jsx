import React from 'react'

const ProductCard = ({image, name, price}) => {
  return (
    <div className='max-W-sm bg-white rounded-lg shadow-lg'>
        <img src={image} alt={name} className='w-full h-64 object-cover rounded-t-lg' />
        <div className='p-4'>
            <h3 className='text-lg font-bold'>{name}</h3>
            <p className='text-gray-600'>Ksh{price}</p>
        </div>
    </div>
  )
}

export default ProductCard