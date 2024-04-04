import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content container mx-auto">
        <div className="footer-logo">
          <div className="nav-logo text-lg font-semibold flex items-center gap-2">
            <span>
              <i class="fa-solid fa-qrcode"></i>
            </span>
            <h2>LensCrafters</h2>
          </div>
          <p>Unlock Your Photography Potential with LensCrafters</p>
        </div>

        <div className="footer-contact">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              123 Street, City, Country
            </li>
            <li>
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              info@example.com
            </li>
            <li>
              <span>
                <i className="fas fa-phone"></i>
              </span>
              +1234567890
            </li>
          </ul>
          {/* Add social media links if needed */}
        </div>
        <div className="footer-about">
          <h2>About Us</h2>
          <p>
            Empowering Travelers Worldwide, LensCrafters is dedicated to
            unlocking the secrets of photography, offering expert tips,
            insights, and inspiration to fuel your passion for capturing the
            world's beauty through the lens. Join us on a journey of discovery
            and creativity as we explore the art and craft of photography
            together.
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-social">
          <span>
            <i class="fa-brands fa-facebook-f"></i>
          </span>
          <span>
            <i class="fa-brands fa-x-twitter"></i>
          </span>
          <span>
            <i class="fa-brands fa-linkedin-in"></i>
          </span>
          <span>
            <i class="fa-brands fa-instagram"></i>
          </span>
        </div>
        <span>
          &copy; 2024 <span className="un-line">LensCrafters</span>. All rights
          reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
