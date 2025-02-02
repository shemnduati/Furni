import React from 'react';
import { BiEnvelope } from 'react-icons/bi';
import { FaPaperPlane } from 'react-icons/fa';
import image from '../../assets/Images/sofa.png';


const NewsLetter = () => {
  return (
    <div className='bg-white relative'>
       <div className='container'>
          <div className='flex justify-between items-start  py-10 '>
            <div className='flex flex-col space-y-1 w-1/2'>
                <div className='flex gap-2'>
                  <BiEnvelope className='text-2xl text-gray-400'/>
                  <h1 className='text-center font-semibold text-md text-primary mb-8'>Subscribe to our Newsletter</h1>
                </div>
              <div className='flex gap-4'>
                  <input type="text" placeholder="Enter your email" className="w-56 py-3 px-2 text-start rounded-xl border border-gray-600" />
                  <input type="email" placeholder="Enter your email" className="w-56 py-3 px-2 rounded-xl border border-gray-600" />
                  <button className="bg-primary text-white py-2 px-4 rounded-md p-2">
                    <FaPaperPlane className='text-xl text-gray-50'/>
                  </button>
                </div>
            </div>
            <div className='relative'>
              <img src={image} alt="Sofa" className='w-80 h-68 -mt-32 object-cover rounded-2xl' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewsLetter