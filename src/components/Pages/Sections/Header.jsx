import React from 'react';

const Header = ({ 
    title, 
    subtitle, 
    bgImage, 
    mainImage, 
    showButtons = true,
    button1Text = "Shop Now", 
    button2Text = "Explore", 
    button1Action = () => {}, 
    button2Action = () => {} 
}) => {
  return (
   <div className='bg-primary text-white px-20 py-12'>
          <div className='container'>
          <div className='flex items-center gap-10'>
               {/* Text */}
               <div className='items-start space-y-6 w-1/2 px-r-10 2xl:px-r-20'>
                   <h1 className=' font-bold text-2xl 2xl:text-6xl lg:text-4xl '>{title}</h1>
                   <p className='text-lg'>{subtitle}</p>
                   <div className='flex space-x-4 items-center  text-gray-100'>
                   {showButtons && (
                 <div className='flex space-x-4 text-gray-100'>
                     {button1Text && (
                       <button 
                          className='bg-secondary py-3 px-6 rounded-full font-bold text-primary' 
                          onClick={button1Action}
                       >
                         {button1Text}
                       </button>
                     )}
                     {button2Text && (
                       <button 
                          className='bg-primary rounded-full text-white font-bold py-3 px-6 border-white border-[1px]' 
                          onClick={button2Action}
                       >
                         {button2Text}
                       </button>
                     )}
                 </div>
               )}
                   </div>
               </div>
               {/* Image */}
               <div className="relative w-1/2">
               {/* Top-right image behind the Couch */}
               {bgImage && (
                 <img 
                   src={bgImage} 
                   alt="Background" 
                   className="absolute top-0 right-0 w-1/3 h-auto z-0"
                 />
               )}
               {/* Main Image */}
               {mainImage && (
                 <img 
                   src={mainImage} 
                   alt="Main Visual" 
                   className="relative w-full h-full object-cover z-10"
                 />
               )}
               </div>
           </div>
          </div>
       </div>
  )
}

export default Header