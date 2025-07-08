import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import About from "./components/About"
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <Navbar /> 
      <Home />
      <Service />
      <About />
      <Products />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  )
}

export default App;
