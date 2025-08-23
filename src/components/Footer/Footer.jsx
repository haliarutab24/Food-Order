import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
      <div className="footer-content-left">
  <span className="logo-text">
    <span className="crave">Crave</span>
    <span className="mingle">Mingle</span>
  </span>

          <p>
       CraveMingle makes food ordering simple, fast, and fun! 🍕  
Discover a variety of delicious meals from your favorite restaurants, customize your order, and get it delivered right to your doorstep. With an easy-to-use interface and secure checkout, satisfying your cravings has never been easier. 🚀

          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div></div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+92-308-4900522</li>
            <li>contact@CraveMingle.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ CraveMingle.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
