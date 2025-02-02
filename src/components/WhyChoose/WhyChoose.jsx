import React from 'react';
import Image from '../../assets/Images/why-choose-us-img.jpg';
import bg from '../../assets/Images/dots-yellow.svg';
import Truck from '../../assets/Images/truck.svg';
import Bag from '../../assets/Images/bag.svg';
import Support from '../../assets/Images/support.svg';
import Return from '../../assets/Images/return.svg';

const WhyChoose = () => {
  return (
    <div className='py-8 bg-gray-50'>
        <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-8'>
        <div className='lg:w-1/2 space-y-8'>
            {/* Text Area */}
            <div className='item-start'>
                <h2 className='text-3xl font-semibold text-gray-800'>Why Choose Us</h2>
                <p className='text-gray-600 mt-4'>Our company is a leading provider of innovative solutions and services. We have a team</p>
            </div>
            {/* Features Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {/* feature one */}
                <div className='flex flex-col items-start space-x-4'>
                    <div className="relative">
                        <img src={Truck} alt="Truck" />
                        <span className="absolute bg-gray-800/30 w-8 h-8 rounded-full bottom-0 right-0 transform translate-x-1/4"></span>
                    </div>
                    <div>
                        <h4 className='text-sm font-semibold text-gray-800'>Free & Fast Delivery</h4>
                        <p className='text-gray-600'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>
                    </div>
                </div>
                {/* feature two */}
                <div className='flex flex-col items-start space-x-4'>
                    <div className="relative">
                        <img src={Bag} alt="bag" />
                        <span className="absolute bg-gray-800/30 w-8 h-8 rounded-full bottom-0 right-0 transform translate-x-1/4"></span>
                    </div>
                    <div>
                        <h4 className='text-sm font-semibold text-gray-800'>Easy to Shop</h4>
                        <p className='text-gray-600'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>
                    </div>
                </div>
                 {/* feature three */}
                 <div className='flex flex-col items-start space-x-4'>
                    <div className="relative">
                        <img src={Support} alt="Support" />
                        <span className="absolute bg-gray-800/30 w-8 h-8 rounded-full bottom-0 right-0 transform translate-x-1/4"></span>
                    </div>
                    <div>
                        <h4 className='text-sm font-semibold text-gray-800'>Free & Fast Delivery</h4>
                        <p className='text-gray-600'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>
                    </div>
                </div>
                {/* feature four */}
                <div className='flex flex-col items-start space-x-4'>
                    <div className="relative">
                        <img src={Return} alt="Return" />
                        <span className="absolute bg-gray-800/30 w-8 h-8 rounded-full bottom-0 right-0 transform translate-x-1/4"></span>
                    </div>
                    <div>
                        <h4 className='text-sm font-semibold text-gray-800'>Easy to Shop</h4>
                        <p className='text-gray-600'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Image Section */}
        <div className='lg:w-1/2 relative'>
                <img src={bg} alt='dots-yellow'  className="absolute top-8  w-1/3 h-auto z-0 order-1" />
                <img src={Image} alt='why-choose-us-img' className="relative scale-75 rounded-2xl shadow-lg order-2  z-10" />
        </div>
    </div>
    </div>
  )
}

export default WhyChoose