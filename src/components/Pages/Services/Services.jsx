import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Sections/Header';
import Image from '../../../assets/Images/couch.png';
import bg from '../../../assets/Images/dots-green.svg';
import Testimonial from '../../Testimonial/Testimonial';
import NewsLetter from '../../NewsLetter/NewsLetter';

const Services = () => {
    const subtitle = `Whether you're furnishing a new house, upgrading your interiors, 
                      or looking for the perfect statement piece, we’re here to bring your vision 
                      to life.`;
  return (
    <div>
        <Header 
           title="Services" 
           subtitle={subtitle} 
           bgImage={bg} 
           mainImage={Image} 
           showButtons={true} // This is default, so you can omit it
           button1Text="Shop Now" 
           button2Text="Explore" 
           button1Action={() => alert("Shop Now Clicked")} 
           button2Action={() => alert("Learn More Clicked")} 
        />
        <Testimonial />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default Services