
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
      "The culinary experience at this place is second to none. The atmosphere is vibrant, the food nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    name: "Andy Smith",
    location: "San Francisco, CA",
    image: "/images/Image(2).png", // Replace with actual image paths
  },
];

const Testimonial = () => {
  return (
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
  );
};

export default Testimonial;
