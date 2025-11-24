
const AboutUs = () => {
  // Testimonials data
  const testimonials = [
    {
      quote: "The best restaurant",
      description:
        "Last night, we dined at this place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      name: "Sophie Robson",
      location: "Los Angeles, CA",
      image: "/images/Ellipse 19.png",
    },
    {
      quote: "Simply delicious",
      description:
        "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      name: "Matt Cannon",
      location: "San Diego, CA",
      image: "/images/Image(1).png",
    },
    {
      quote: "One of a kind restaurant",
      description:
        "The culinary experience at this place is second to none. The atmosphere is vibrant, the food — nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      name: "Andy Smith",
      location: "San Francisco, CA",
      image: "/images/Image(2).png",
    },
  ];

  return (
    <>
      {/* About Us Section */}
      <section className="about-us">
        <div className="container">
          <div className="about-us-content">
            {/* Image Section */}
            <div className="about-us-image">
              <img src="/images/Image(3).png" alt="About Us" />
            </div>

            {/* Text Section */}
            <div className="about-us-text">
              <h2>We provide healthy food for your family.</h2>
              <p>
                Our story began with a vision to create a unique dining experience that merges fine
                dining, exceptional service, and a vibrant ambiance. Rooted in the city’s rich
                culinary culture, we aim to honor our local roots while infusing a global palate.
              </p>
              <p>
                At our place, we believe that dining is not just about food, but also about the overall
                experience. Our staff, renowned for their warmth and dedication, strives to make every
                visit an unforgettable event.
              </p>
            </div>
          </div>

          {/* Contact Us Card */}
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

      {/* Feel Section */}
      <section className="feel">
        <div className="feel-content">
          <h1>▶</h1>
          <p>
            Feel the authentic & <br />original taste from us
          </p>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="del">
        <div className="del-content">
          <img src="/images/restaurant-menu 1.png" alt="Restaurant menu" />
          <div className="text-content">
            <h1>Multi Cuisine</h1>
            <p>
              In the new era of technology we look in the future with certainty life.
            </p>
          </div>
        </div>
        <div className="del-content">
          <img src="/images/Icon.png" alt="Easy to order" />
          <div className="text-content">
            <h1>Easy To Order</h1>
            <p>
              In the new era of technology we look in the future with certainty life.
            </p>
          </div>
        </div>
        <div className="del-content">
          <img src="/images/timer 1.png" alt="Fast service" />
          <div className="text-content">
            <h1>Fast Service</h1>
            <p>
              In the new era of technology we look in the future with certainty life.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Text Section */}
          <div className="about-text">
            <h2 className="about-title">A little information for our valuable guest</h2>
            <p className="about-description">
              At place, we believe that dining is not just about food, but also about the overall
              experience. Our staff, renowned for their warmth and dedication, strives to make every
              visit an unforgettable event.
            </p>
          </div>

          {/* Stats Section */}
          <div className="about-stats">
            <div className="stat-card">
              <h3 className="stat-number">3</h3>
              <p className="stat-label">Locations</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">2024</h3>
              <p className="stat-label">Founded</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">65+</h3>
              <p className="stat-label">Staff Members</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Satisfied Customers</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="about-image">
            <img src="/images/Mask group.png" alt="About Us Image" />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2 className="testimonial-title">What Our Customers Say</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <p className="testimonial-description">{testimonial.description}</p>
              <div className="testimonial-profile">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
