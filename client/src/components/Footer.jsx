import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'; 

const Footer = () => {
  return (
    <footer className="text-gray-300 mt-12 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Branding Section */}
          <div className="space-y-4 text-center sm:text-left">
            <h2 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Nepali Flavor Dish
              </span>
            </h2>
            <p className="text-sm text-gray-400">
              Preserving Nepal's culinary heritage through authentic recipes and cultural storytelling.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-center sm:justify-start items-center">
                <FiMail className="w-5 h-5 mr-2 text-yellow-500" />
                something@gmail.com
              </li>
              <li className="flex justify-center sm:justify-start items-center">
                <FiPhone className="w-5 h-5 mr-2 text-yellow-500" />
                +977 12345623235
              </li>
              <li className="flex justify-center sm:justify-start items-center">
                <FiMapPin className="w-5 h-5 mr-2 text-yellow-500" />
                Biratnagar, Morang
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transform hover:scale-110 transition-all">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transform hover:scale-110 transition-all">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transform hover:scale-110 transition-all">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transform hover:scale-110 transition-all">
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Newari Flavors. All rights reserved.
            <br className="block sm:hidden" />
            <span className="sm:inline-block mt-2 sm:mt-0"> Crafted with love in Nepal.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
