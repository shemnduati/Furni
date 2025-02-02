import React from 'react';
import Product1 from '../../assets/Images/product-1.png';
import Product2 from '../../assets/Images/product-2.png';
import Product3 from '../../assets/Images/product-3.png';

const Blog = () => {
    const chairs = [
        {
            id: 1,
            name: 'Nordic Chair',
            image: Product1,
            description:'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.'
        },
        {
            id: 2,
            name: 'Kruzo Aero Chair',
            image: Product2,
            description:'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.'
        },
        {
            id: 3,
            name: 'Ergonomic Chair',
            image: Product3,
            description:'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.'
        }
    ]
  return (
   <div className='bg-gray-50'>
     <div className='container py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                chairs.map((chair) => (
                    <div key={chair.id}
                     className='flex items-center gap-4'
                    >
                        {/* Image Column */}
                        <div className='w-1/3 bg-primary/5 rounded-2xl'>
                            <img src={chair.image} alt={chair.name} className='w-full h-full object-cover' />
                        </div>
                        <div className='w-2/3 items-start'>
                        <h3 className='text-md font-semibold text-gray-800'>{chair.name}</h3>
                        <p className='text-sm text-gray-600'>{chair.description}</p>
                        <a href='#' className='mt-4 text-gray-500 font-semibold text-md'>Read More</a>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
   </div>
  )
}

export default Blog