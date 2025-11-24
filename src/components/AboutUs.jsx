import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us-content">

          {/* Left side: Image */}
          <div className="about-us-image">
            <img src="/images/Image.png" alt="Styled Image" />
          </div>

          {/* Right side: Text */}
          <div className="about-us-text">
            <h2>We provide healthy food for your family.</h2>

            <p>
              Our story began with a vision to create a unique dining experience that merges 
              fine dining, exceptional service, and a vibrant ambiance. Rooted in the city’s 
              rich culinary culture, we aim to honor our local roots while infusing a global palate.
            </p>

            <p>
              At our place, we believe that dining is not just about food, but also about 
              the overall experience. Our staff, renowned for their warmth and dedication, 
              strives to make every visit an unforgettable event.
            </p>

            {/* React Router Link */}
            <Link to="/about-page" className="more-about-us">
              More About Us
            </Link>
          </div>
        </div>

        {/* Visit Us Card */}
        <div className="visit-us-card">
          <h3>Come and visit us</h3>
          <ul>
            <li>📞 (414) 857 – 0107</li>
            <li>📧 happytummy@restaurant.com</li>
            <li>📍 837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
