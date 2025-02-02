import React from 'react';
import News1 from '../../assets/Images/post-1.jpg';
import News2 from '../../assets/Images/post-2.jpg';
import News3 from '../../assets/Images/post-3.jpg';


const BlogData =  [
    {
        "id": 1,
        "title": "First Time Home Owner Ideas",
        "author":"Kristin Waston",
        "image": News1,
        "date": "Dec 19th, 2023"
    },
    {
        "id": 2,
        "title": "How To Keep Your Furniture Clean",
        "author":"Robert Fox",
        "image": News2,
        "date": "Dec 15th, 2023"
    },
    {
        "id": 3,
        "title": "Small Space Furniture Apartment Ideas",
        "author":"Kristin Waston",
        "image": News3,
        "date": "Dec 12th, 2023"
    }
];

const News = () => {
  return (
    <div className='bg-gray-50'>
        <div className='container py-36'>
        <div>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-semibold text-gray-600'>Recent Blog</h2>
                <p className='underline'>View All Post</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8  mt-10'>
                {BlogData.map((item, index) => (
                    <div className=''>
                        <div  key={index} className='flex flex-col space-y-2'>
                            <img src={item.image} alt="Blog Image" className='w-full  object-cover rounded-2xl' />
                            <h3 className='text-lg font-semibold'>{item.title}</h3>
                            <div className='flex items-center gap-1'>
                            <p className='text-sm text-gray-500'>by</p>
                            <p className='text-sm text-gray-500 font-bold'> {item.author}</p>
                            <p className='text-sm text-gray-500'>on</p>
                            <p className='text-sm text-gray-500 font-bold'>{item.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default News