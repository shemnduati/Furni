import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Sections/Header';
import Image from '../../../assets/Images/couch.png';
import bg from '../../../assets/Images/dots-green.svg';
import Testimonial from '../../Testimonial/Testimonial';
import NewsLetter from '../../NewsLetter/NewsLetter';
import WhyChoose from '../../WhyChoose/WhyChoose';
import OurTeam from '../Sections/OurTeam';

function About() {
    const subtitle = `Founded in 2007, Furni began with a simple vision: to offer beautifully 
                        crafted furniture that blends timeless elegance with modern practicality.`;
  return (
    <div>
        <Header 
           title="About US" 
           subtitle={subtitle} 
           bgImage={bg} 
           mainImage={Image} 
           showButtons={true} // This is default, so you can omit it
           button1Text="Shop Now" 
           button2Text="Explore" 
           button1Action={() => alert("Shop Now Clicked")} 
           button2Action={() => alert("Learn More Clicked")} 
        />
        <WhyChoose />
        <OurTeam />
        <Testimonial />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default About