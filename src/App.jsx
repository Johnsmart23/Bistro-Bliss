import './App.css';
import { Routes, Route } from "react-router-dom"; 
import Header1 from "./components/Header1";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Event from './components/Event';
import Delivery from './components/Delivery';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Footer from './components/Footer';

import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import TablePage from "./pages/Table"; 
import BlogPage from "./pages/BlogPage";   

const App = () => {
  return (
    <>
      <Header1 />
      <Header />

      <main>
        <Routes>
          {/* Home page */}
          <Route path="/" element={
            <>
              <HeroSection />
              <Menu />       
              <AboutUs />   
              <Event />
              <Delivery />
              <Testimonial />
              <Blog />
              <Footer />
            </>
          } />

          {/* About page */}
          <Route path="/about-page" element={<><AboutPage /><Footer /></>} />

          {/* Menu page */}
          <Route path="/menu" element={<><MenuPage /><Footer /></>} />

          {/* Contact page */}
          <Route path="/contact" element={<><ContactPage /><Footer /></>} />  

          {/* Table booking page */}
          <Route path="/table" element={<><TablePage /><Footer /></>} />  

           {/* ✅ Blog page */}
          <Route path="/blog" element={<><BlogPage /><Footer /></>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
