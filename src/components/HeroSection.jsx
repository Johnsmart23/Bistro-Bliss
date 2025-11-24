import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Best food for your taste</h1>
        <p>
          Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
        </p>
        <div className="hero-buttons">
          <button className="cta-btn"><Link to="/table">Book A Table</Link></button>
         
          <button className="cta-btn secondary"><Link to="/menu">Explore Menu</Link></button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
