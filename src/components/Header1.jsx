import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Head = () => {
  return (
    <div id="mainicon">
    <div className="icons">
        <a href="tel:+2348127790800" title="Call Us"><FaPhoneAlt className="icon" />+2348127790800
        </a>
        <a href="mailto:favoursmart666@gmail.com" title="Email Us">
            <FaEnvelope className="icon" />favoursmart666@gmail.com
        </a>
    </div>
    <div className="socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebook className="icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
            <FaTwitter className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram className="icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin className="icon" />
        </a>
    </div>
</div>

  );
};

export default Head;
