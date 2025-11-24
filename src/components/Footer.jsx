import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT: Brand */}
        <div className="footer-left">
          <img src="/images/Logo.png" alt="Logo" className="logo" />
          <p className="brand-description">
            In the new era of technology, <br /> we look to the future with certainty <br />
            and pride for our company.
          </p>

          {/* Social Icons */}
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FaFacebook className="social-icon" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="social-icon" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="social-icon" /></a>
            <a href="#" aria-label="Pinterest"><FaPinterest className="social-icon" /></a>
          </div>
        </div>

        {/* CENTER: Footer Links */}
        <div className="footer-center">
          <div className="link-column">
            <h3 className="link-title">Pages</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Delivery</a></li>
            </ul>
          </div>

          <div className="link-column">
            <h3 className="link-title">Utility Pages</h3>
            <ul>
              <li><a href="#">Start Here</a></li>
              <li><a href="#">Styleguide</a></li>
              <li><a href="#">Password Protected</a></li>
              <li><a href="#">404 Not Found</a></li>
              <li><a href="#">Licenses</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">View More</a></li>
            </ul>
          </div>
        </div>

        {/* RIGHT: Instagram / Link Title */}
        <div className="footer-right">
          <h3 className="link-title">Follow Us On Instagram</h3>
          <div className="instagram-images">
            <img src="/images/Mask group(7).png" alt="Instagram 1" />
            <img src="/images/footer 2.png" alt="Instagram 2" />
            <img src="/images/footer 3.png" alt="Instagram 3" />
            <img src="/images/Mask group(8).png" alt="Instagram 4" />
          </div>
        </div>
      </div>

      <hr />

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright © 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
