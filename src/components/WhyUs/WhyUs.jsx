import React from 'react';
import Image from '../../assets/Images/why-choose-us-img.jpg';
import bg from '../../assets/Images/dots-green.svg';
import Img1 from '../../assets/Images/img-grid-1.jpg';
import Img2 from '../../assets/Images/img-grid-2.jpg';
import Img3 from '../../assets/Images/img-grid-3.jpg';


const WhyUs = () => {
  return (
    <div className='py-16'>
        <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-8'>
        {/* Image Section */}
        <div className='lg:w-1/2 relative'>
            <div className='absolute -top-10 -left-5 transform -translate-x-8 -translate-y-8'>
                <img src={bg} alt='dots-yellow'  className="w-full h-full object-contain" />
            </div>
            {/* Image grid */}
            <div className="relative flex flex-col lg:flex-row gap-4">
            {/* First Image (Large Image on the Left) */}
            <div className="w-full lg:w-3/5">
                <img src={Img1} alt="Img-grid-1" className="rounded-xl w-full h-auto" />
            </div>

            {/* Right Column (Two Images) */}
            <div className="relative w-full lg:w-2/5 flex flex-col gap-4">
                {/* Second Image (Top-Right) */}
                <img src={Img2} alt="Img-grid-2" className="rounded-xl w-full h-auto" />

                {/* Third Image (Bottom-Right with Absolute Positioning) */}
                <div className="absolute top-24 left-10 -ml-24 lg:static">
                <img src={Img3} alt="Img-grid-3" className="rounded-xl w-full h-auto" />
                </div>
            </div>
            </div>
        </div>
        <div className='lg:w-1/2 space-y-8'>
            {/* Text Area */}
            <div className='item-start'>
                <h2 className='text-3xl font-semibold text-gray-800'>We Help you Make Modern <br/> Interior Design</h2>
                <p className='text-gray-400 mt-4'> Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
            tristique senectus et netus et malesuada.</p>
            </div>
            {/* Bullet Points */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <ul className='list-disc space-y-2 text-gray-400 ml-5'>
                    <li>Donec vitae odio quis nisl dapibus malesuada.</li>
                    <li>Donec vitae odio quis nisl dapibus malesuada.</li>
                </ul>
                <ul className='list-disc space-y-2 text-gray-400 ml-5'>
                    <li>Donec vitae odio quis nisl dapibus malesuada.</li>
                    <li>Donec vitae odio quis nisl dapibus malesuada.</li>
                </ul>
            </div>
            <button className="px-6 py-3 font-semibold bg-black text-white rounded-full">
                    Explore
            </button>
        </div>
    </div>
    </div>
  )
}

export default WhyUs