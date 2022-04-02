import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaStackOverflow, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div name='footer'>
      <footer class="footer footer-center p-10 bg-primary text-primary-content">
        <div>
          <p class="font-bold">
            Kelechukwu Blessing Okere.
            <br />
            <a href="https://bloomnet.com.ng" target="_blank">
              My Company Website
            </a>
          </p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div>
          <div class="grid grid-flow-col gap-4">
            <a className="text-4xl">
              <FaFacebook />
            </a>
            <a className="text-4xl">
              <FaInstagram />
            </a>
            <a className="text-4xl">
            <FaLinkedin />
            </a>
            <a className="text-4xl">
            <FaTwitter />
            </a>
            <a className="text-4xl">
            <FaStackOverflow />
            </a>
            <a className="text-4xl">
            <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
