import React from 'react';

const About = () => {
  return (
    <div id="about" className='min-h-screen py-12 px-6 sm:px-16 lg:px-52'>
      <div className='max-w-7xl mx-auto'>

        {/* Title */}
        <h1 className='text-4xl sm:text-5xl w-fit font-bold mx-auto text-center sm:text-left mb-12'>
          <span className='bg-gradient-to-r from-[#FFB703] to-[#57A6A1] text-transparent w-fit bg-clip-text'>
            Who We Are? 
          </span>
        </h1>

        {/* Objective Section */}
        <div className='rounded-2xl shadow-lg p-6 sm:p-8 mb-12 transition-all duration-300 hover:shadow-xl'>
          <div className='mb-6'>
            <h3 className='text-2xl sm:text-3xl font-bold text-[#1C82AD]'>Our Objective</h3>
          </div>
          <p className='text-[#ccc] text-base sm:text-lg leading-relaxed pl-4 sm:pl-6 border-l-4 border-yellow-500'>
            Nepal's rich cultural tapestry includes the Newar community's distinct cuisine, 
            a culinary heritage at risk in our digital age. We're preserving these flavors 
            before they fade into obscurity, creating a bridge between tradition and modernity.
          </p>
        </div>

        {/* Purpose Section */}
        <div className='rounded-2xl shadow-lg p-6 sm:p-8 mb-12 transition-all duration-300 hover:shadow-xl'>
          <div className='mb-6'>
            <h3 className='text-2xl sm:text-3xl font-bold text-[#1C82AD]'>Our Purpose</h3>
          </div>
          <p className='text-[#ccc] text-base sm:text-lg leading-relaxed pl-4 sm:pl-6 border-l-4 border-yellow-500'>
            More than just a recipe collection - we're building a living archive for Newari cuisine. 
            A dynamic platform where culinary traditions meet digital innovation, ensuring every 
            spice blend and cooking technique survives for future generations.
          </p>
        </div>

        {/* Grid Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-2 mb-12'>

          {/* Target Audience */}
          <div className='bg-[#89A8B2] rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300'>
            <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center'>
              <span className='bg-[#D9EAFD] p-2 rounded-lg mr-3'>👥</span>
              Who Benefits?
            </h3>
            <ul className='space-y-4'>
              {[
                'Global food explorers craving authentic tastes',
                'Nepali youth rediscovering roots',
                'Culinary professionals seeking inspiration',
                'Cultural researchers documenting traditions',
                'Wanderlust-driven food tourists'
              ].map((item, index) => (
                <li key={index} className='flex items-start text-gray-600'>
                  <svg className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 16.7L0 10.4l2.1-2.1 4.2 4.2L17.9 3 20 5.1 6.3 18.8l-.1.1-.1-.1z"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div className='bg-[#96B6C5] rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300'>
            <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center'>
              What We Offer
            </h3>
            <ul className='space-y-4'>
              {[
                'Curated traditional recipe database',
                'Community-driven recipe submissions',
                'High-quality visual feast gallery',
                'Mobile-optimized experience',
                'Cultural context and histories'
              ].map((item, index) => (
                <li key={index} className='flex items-start text-gray-600'>
                  <div className='w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full mr-3 flex items-center justify-center text-sm font-bold'>
                    {index + 1}
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing Statement */}
        <div className='bg-gray-800 rounded-2xl p-6 sm:p-8 text-center'>
          <p className='text-lg sm:text-xl text-[#ccc] italic font-medium'>
            "Preserving taste, one recipe at a time – join us in safeguarding 
            <span className='text-yellow-600'> Nepali Flavor Dish</span>."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
