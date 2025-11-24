import { Link } from "react-router-dom";

const BlogSection = () => {
    return (
      <section className="blog-section">
        <div className="container">
          <div className="blog-title-wrapper">
            <h2 className="blog-title">Our Blog & Articles</h2>
            <Link to="/blog">
            <button className="read-all-btn">Read All Articles</button>
          </Link>
          </div>
  
          <div className="blog-layout">
            <div className="large-card">
              <img
                src="/images/Mask group(3).png"
                alt="Perfect Burger"
                className="blog-image"
              />
              <div className="blog-content">
                <p className="blog-date">January 3, 2023</p>
               <h3 className="blog-heading">
  Expert Tips for Making the Perfect Burger & Pizza Every Time
</h3>
<p className="blog-description">
  Learn how to craft delicious burgers and pizzas with simple steps, ensuring every bite delights your customers.
</p>

              </div>
            </div>
  
            <div className="small-cards">
              <div className="small-card">
                <img
                  src="/images/Mask group(4).png"
                  alt="French Fries"
                  className="blog-image"
                />
                <div className="blog-content">
                  <p className="blog-date">January  21, 2024</p>
                  <h3 className="blog-heading">
                    How to prepare the perfect french fries in an air fryer
                  </h3>
                </div>
              </div>
              <div className="small-card">
                <img
                  src="/images/Mask group(5).png"
                  alt="Chicken Tenders"
                  className="blog-image"
                />
                <div className="blog-content">
                  <p className="blog-date">January  22, 2024</p>
                  <h3 className="blog-heading">
                    How to prepare delicious chicken tenders
                  </h3>
                </div>
              </div>
              <div className="small-card">
                <img
                  src="/images/Mask group(9).png"
                  alt="Cheesecakes"
                  className="blog-image"
                />
                <div className="blog-content">
                  <p className="blog-date">January  23, 2023</p>
                  <h3 className="blog-heading">
                    7 delicious cheesecake recipes you can prepare
                  </h3>
                </div>
              </div>
              <div className="small-card">
                <img
                  src="/images/Mask group(6).png"
                  alt="Pizza Restaurants"
                  className="blog-image"
                />
                <div className="blog-content">
                  <p className="blog-date">January  24, 2023</p>
                  <h3 className="blog-heading">
                    5 great pizza restaurants you should visit this city
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogSection;
  