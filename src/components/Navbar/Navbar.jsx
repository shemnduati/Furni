import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { FaCartShopping, FaUser } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom';

const Menu = [
    { 
        id: 1,
        name: 'Home', 
        link: '/'
     },
     { 
        id: 2,
        name: 'Shop', 
        link: '/shop'
     },
     { 
        id: 3,
        name: 'About Us', 
        link: '/about'
     },
     { 
        id: 4,
        name: 'Services', 
        link: '/services'
     },
     { 
        id: 5,
        name: 'Blog', 
        link: '/blog'
     },
     { 
        id: 6,
        name: 'Contact Us', 
        link: '/contact'
     },
]
const Navbar = () => {
  const location = useLocation();
  return (
    <div className='text-white relative z-40'>
       <div className='bg-primary py-2'>
        <div className='container flex justify-between items-center'>
                {/* Logo */}
                <div>
                    <a href='#' className='font-bold text-2xl sm:text-3xl'>Furni.</a>
                </div>
                {/* Nav Links */}
                <div className='flex justify-center'>
                    <ul className='sm:flex hidden items-center gap-4'>
                        {Menu.map((data) => (
                        <li key={data.id} className="relative">
                            <Link
                              to={data.link}
                              className={`inline-block px-4 space-y-4 font-semibold 
                                  text-gray-200 
                                  hover:text-white 
                                  ${data.name === 'Home' ? 'text-white' : ''}`}
                              >
                              {data.name}
                            </Link>
                           {/* Highlight the active link dynamically */}
                           {location.pathname === data.link && (
                              <span className="absolute left-3 -bottom-2 w-9/12 h-[4px] bg-yellow-400"></span>
                            )}
                        </li>
                        ))}
                    </ul>
                </div>
                {/* Icons */}
                <div className='flex space-x-4'>
                  <button className='hover:text-yellow-400'>
                  <FaUser />
                  </button>
                  <buttton className='hover:text-yellow-400'>
                    <FaCartShopping />
                  </buttton>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Navbar