import React from 'react';
import Product1 from '../../assets/Images/product-1.png';
import Product2 from '../../assets/Images/product-2.png';
import Product3 from '../../assets/Images/product-3.png';
import ProductCard from './ProductCard';

const products = [
    { 
        id: 1, 
        name: 'Nordic Chair', 
        image: Product1,
        price: '50.00'
    },
    { 
        id: 2, 
        name: 'Kruzo Aero Chair', 
        image: Product2,
        price: '78.00'
    },
    { 
        id: 3, 
        name: 'Egonomic Chair', 
        image: Product3,
        price: '43.00'
    }
]
const Products = () => {
  return (
    <div className='bg-gray-100 py-12 px-4'>
        <div className='flex flex-col md:flex-row justify-center items-center mb-8'>
            <div className='mb-6 md:mb-0 text-center md:text-left md:w-1/4'>
                <h2 className='text-3xl font-bold text-center mb-8'>Crafted With Excellent Material</h2>
                <p className='text-center text-gray-700 mb-8'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor
                tempor tristique.
                </p>
            </div>
            <div className='w-full md:w-3/4'>
                 {/* Products */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {
                        products.map((data) => (
                            <ProductCard key={data.id} image={data.image} name={data.name} price={data.price} />
                        ))
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products