import React from 'react';
import Image from '../../assets/Images/couch.png'
import bg from '../../assets/Images/dots-green.svg'

const Hero = () => {
  return (
    <div className='bg-primary text-white px-20 py-12'>
        <div className='flex items-center'>
            {/* Text */}
            <div className='space-y-6 w-1/2'>
                <h1 className=' font-bold text-4xl'>Modern Interior Design Studio</h1>
                <p className='text-lg'>Donec vitae odio quis nisl dapibus malesuada. 
                    Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor
                     tempor tristique.</p>
                <div className='flex space-x-4 items-center  text-gray-100'>
                    <button className='bg-secondary py-3 px-6 rounded-full font-bold text-primary'>Shop Now</button>
                    <button className='bg-primary rounded-full text-white font-bold py-3 px-6 border-white border-[1px]'>Explore</button>
                </div>
            </div>
            {/* Image */}
            <div className="relative w-1/2">
            {/* Top-right image behind the Couch */}
            <img 
                src={bg} 
                alt="Background" 
                className="absolute top-0 right-0 w-1/3 h-auto z-0" 
            />
             {/* Couch image */}
            <img 
                src={Image} 
                alt="Couch" 
                className="relative w-full h-full object-cover z-10" 
            />
            </div>
        </div>
    </div>
  )
}

export default Hero