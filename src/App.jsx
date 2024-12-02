import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Testimonial from './components/Testimonial/Testimonial'
import WhyChoose from './components/WhyChoose/WhyChoose'
import WhyUs from './components/WhyUs/WhyUs'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Products />
    <WhyChoose />
    <WhyUs />
    <Testimonial />
    <Footer />
    </>
  )
}

export default App
