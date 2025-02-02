import React from 'react';
import Blog from '../../../components/Blog/Blog';
import Footer from '../../../components/Footer/Footer';
import Hero from '../../../components/Hero/Hero';
import News from '../../../components/News/News';
import NewsLetter from '../../../components/NewsLetter/NewsLetter';
import Products from '../../../components/Products/Products';
import Testimonial from '../../../components/Testimonial/Testimonial';
import WhyChoose from '../../../components/WhyChoose/WhyChoose';
import WhyUs from '../../../components/WhyUs/WhyUs';

const Home = () => {
  return (
    <>
    <Hero />
    <Products />
    <WhyChoose />
    <WhyUs />
    <Blog />
    <Testimonial />
    <News />
    <NewsLetter />
    <Footer />
    </>
  )
}

export default Home