
const Delivery = () => {
  return (
    <section className="delivery-section">
      <div className="delivery-container">
        {/* Image Section */}
        <div className="delivery-images">
          <img
            src="/images/image 2.png"// Replace with the actual image path
            alt="Chef preparing food"
            className="image-large"
          />
          <img
            src="/images/image 3.png" // Replace with the actual image path
            alt="Dish 1"
            className="image-small"
          />
          <img
            src="/images/image 4.png" // Replace with the actual image path
            alt="Dish 2"
            className="image-small"
          />
        </div>

        {/* Text Section */}
        <div className="delivery-content">
          <h2>Fastest Food Delivery in City</h2>
          <p>
            Our visual designer lets you quickly drag and customize apps for both desktop and mobile.
          </p>
          <ul>
            <li>🚚 Delivery within 30 minutes</li>
            <li>💰 Best Offer & Prices</li>
            <li>🌐 Online Services Available</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
