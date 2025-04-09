import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <div id="contact" className="py-12 px-4 sm:px-6 lg:px-8 text-gray-200 ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-semibold sm:font-bold text-center mb-10 sm:mb-20">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            Get in Touch
          </span>
        </h1>

        <div className="flex flex-col px-4 md:flex-row gap-8 justify-between items-center text-center">
          {/* Info Section */}
          <div className="w-full md:w-1/2 space-y-10">
            <div>
              <h3 className="text-2xl text-start sm:font-bold text-yellow-500 mb-2">Contact Information</h3>
              <ul className="space-y-4 sm:text-lg sm:pl-0 ">
                <li className="flex items-center ">
                  <FiMail className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                  something@gmail.com
                </li>
                <li className="flex items-center">
                  <FiPhone className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                  +977 12345623235
                </li>
                <li className="flex items-center">
                  <FiMapPin className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                  Biratnagar, Morang, Nepal
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl sm:font-bold text-yellow-500 text-start mb-2">Our Mission</h3>
              <p className=" text-[14px] sm:text-lg text-[#ccc] text-start leading-relaxed">
                We are dedicated to preserving Nepal's rich culinary heritage through authentic 
                recipes, visual storytelling, and cultural celebration. If you’re passionate about
                Newari cuisine or just curious to learn more — connect with us!
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full md:w-1/2 overflow-hidden shadow-lg ">
            <iframe className='rounded-xl' title="Nepali Flavor Dish Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.245612808753!2d87.26596121506214!3d26.45247448290695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef756da8cf228f%3A0x4d34c5dbd7b1c16e!2sBiratnagar%2C%20Nepal!5e0!3m2!1sen!2snp!4v1615874113763!5m2!1sen!2snp" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
