import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Sections/Header';
import Image from '../../../assets/Images/couch.png';
import bg from '../../../assets/Images/dots-green.svg';
import Testimonial from '../../Testimonial/Testimonial';
import NewsLetter from '../../NewsLetter/NewsLetter';

const Blog = () => {
    const subtitle = `Explore our collection today and experience the perfect blend of comfort, style, and quality!.`;
  return (
    <div>
         <Header 
           title="Blog" 
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

export default Blog