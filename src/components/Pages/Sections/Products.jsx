import React from 'react';
import Product1 from '../../../assets/Images/product-1.png';
import Product2 from '../../../assets/Images/product-2.png';
import Product3 from '../../../assets/Images/product-3.png';
import ProductCard from '../../Products/ProductCard';

const products = [
    {
        "id": 1,
        "name": "Nordic Chair",
        "image": Product1,
        "price": "50.00"
    },
    {
        "id": 2,
        "name": "Kruzo Aero Chair",
        "image": Product2,
        "price": "78.00"
    },
    {
        "id": 3,
        "name": "Egonomic Chair",
        "image": Product3,
        "price": "43.00"
    },
    {
        "id": 4,
        "name": "Nordic Chair",
        "image": Product3,
        "price": "50.00"
    },
    {
        "id": 5,
        "name": "Nordic Chair",
        "image": Product3,
        "price": "50.00"
    },
    {
        "id": 6,
        "name": "Kruzo Aero Chair",
        "image": Product2,
        "price": "78.00"
    },
    {
        "id": 7,
        "name": "Egonomic Chair",
        "image": Product1,
        "price": "43.00"
    },
    {
        "id": 8,
        "name": "Nordic Chair",
        "image": Product3,
        "price": "50.00"
    }
];
const Products = () => {
  return (
    <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-4 translate-y-40 space-x-8 gap-y-40'>
            {products.map((product) => (
                <ProductCard  key={product.id} image={product.image} name={product.name} price={product.price} />
            ))
            }
        </div>
    </div>
  )
}

export default Products