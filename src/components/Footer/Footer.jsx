import React from 'react'
import { FaFacebook, FaFacebookF, FaFacebookMessenger, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-white py-10'>
      <div className='container mx-auto '>
        {/* Company Info */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='w-full md:w-1/4'>
            <h2 className='text-2xl font-bold text-primary'>Furni</h2>
            <p className='text-sm text-gray-500 mt-4'>
              At Furni, we believe that furniture is more than just pieces in a room—it’s a 
              reflection of your personality, a source of comfort, and a foundation for cherished memories. 
            </p>
            <div className='flex space-x-4 mt-4'>
              <a href='#' className=' bg-primary/25 p-3 rounded-full'>
                <i className='text-primary'>
                  <FaFacebookF  />
                  </i>
                </a>
              <a href='#' className='bg-primary/25 p-3 rounded-full'>
                <i className='text-primary'>
                  <FaTwitter />
                </i>
              </a>
              <a href='#' className='bg-primary/25 p-3 rounded-full'>
                <i className='text-primary'>
                  <FaInstagram />
                </i>
              </a>
              <a href='#' className='bg-primary/25 p-3 rounded-full'>
                <i className='text-primary'>
                  <FaLinkedinIn />
                </i>
              </a>
            </div>
          </div>
          {/* Navigation Link */}
          <div className='w-full md:w-3/4 '>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-start justify-center'>
            <div>
              <ul className='mt-4 text-gray-700 text-sm space-y-3'>
                <li >About Us</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <ul className='mt-4 text-gray-700 text-sm space-y-3'>
                <li>Support</li>
                <li>Knowledge base</li>
                <li>Live chat</li>
              </ul>
            </div>

            <div>
              <ul className='mt-4 text-gray-700 text-sm space-y-3'>
                <li>Jobs</li>
                <li>Our Team</li>
                <li>Leadership</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <ul className='mt-4 text-gray-700 text-sm space-y-3'>
                <li>Nordic Chair</li>
                <li>Kruzo Aero</li>
                <li>Ergonomic Chair</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
         {/* Footer Bottom */}
      <div className='w-full mt-10 border-t'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-end mt-4 justify-between'>
          <p> 
            &copy; 2025 Furni. All rights reserved.
            <a href='#' className='text-gray-800 font-semibold'>mactech.co</a>
          </p>
          <div className='text-right'>
            <a href='#' className='text-gray-800 font-semibold'>Terms of Service</a>
            <a href='#' className='text-gray-800 font-semibold ml-4'>Privacy Policy</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer