import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Sections/Header';
import Image from '../../../assets/Images/couch.png';
import bg from '../../../assets/Images/dots-green.svg';

const Shop = () => {
  const subtitle = "";
  return (
    <div>
        <Header 
           title="Shop" 
           subtitle={subtitle} 
           showButtons={false} 
           bgImage={bg}
           mainImage={Image}
        />
        <Footer />
    </div>
  )
}

export default Shop