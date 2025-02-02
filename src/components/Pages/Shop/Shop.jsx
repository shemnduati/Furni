import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Sections/Header';
import Image from '../../../assets/Images/couch.png';
import bg from '../../../assets/Images/dots-green.svg';
import Products from '../Sections/Products';
import NewsLetter from '../../NewsLetter/NewsLetter';

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
        <div className="bg-primary/10 pt-10 pb-80">
            <Products />
        </div>
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default Shop