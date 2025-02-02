import React from 'react';
import User1 from '../../assets/Images/person_1.jpg';
import User2 from '../../assets/Images/person_3.jpg';
import User3 from '../../assets/Images/person_4.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestimonyData = [
  {
    image: User1,
    name: 'Maria Jones',
    title: 'CEO, Co-Founder, XYZ Company',
    testimony: `As an interior designer, finding high-quality and stylish furniture that fits my clients' needs is always a challenge. This shop never disappoints! 
                Their collection is not only stunning but also durable. My latest project came together beautifully, thanks to their unique pieces. Highly recommend it!.`,
  },
  {
    image: User2,
    name: 'Mark L.',
    title: ' Happy Homeowner',
    testimony: `We recently renovated our living room, and the furniture from this shop was the perfect finishing touch. The staff was super helpful in guiding us to find pieces that matched our style and budget.
                 It's amazing how much these items have transformed our space!`,
  },
  {
    image: User3,
    name: 'Sophia R.',
    title: ' Small Business Owner',
    testimony: `I own a small boutique and was looking for unique furniture to display my products. This shop has a great selection of items that you won't find anywhere else.`
  }
];


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: true,
    arrows: true,
  };
  return (
    <div className='pt-20 py-16 bg-gray-50'>
      <div>
        <h1 className='text-center font-semibold text-3xl mb-8 '>Testimonials</h1>
        <div className='mt-8'>
          <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}>
              {
                TestimonyData.map((data, index) => (
                  <div key={index}>
                    <div className='grid grid-cols-1 sm:grid-cols-1 pb-8 '>
                    <div  className='flex flex-col items-center justify-center pl-20 pr-20'>
                      <p className='text-center text-xl text-gray-600'>"{data.testimony}"</p>
                      <img src={data.image} alt={data.name} className='w-20 h-20 rounded-full' />
                      <h3 className='text-lg font-semibold'>{data.name}</h3>
                      <p className=' text-sm text-gray-700'>{data.title}</p>
                    </div>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial