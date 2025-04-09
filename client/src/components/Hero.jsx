import React from 'react';
import { ChickenChoila, HakuChoila, Kachila, SapuMichaa, Yomari } from '../assets/assetsInfo';

const images = [ChickenChoila, HakuChoila, Kachila, SapuMichaa, Yomari];
const titles = ['Chicken Choila', 'Haku Choila', 'Kachila', 'Sapu Michaa', 'Yomari'];

const Hero = () => {
  return (
    <div className='flex max-w-full w-[80%] h-auto sm:h-[80vh] m-auto flex-col md:flex-row items-center justify-center p-10 gap-10'>

      {/* Left Section */}
      <div className='flex-1 w-fit pb-9 text-center md:text-left'>
          <h2 className='text-4xl md:text-5xl py-2 max-w-fit font-bold text-[#1C82AD] tracking-wide'>Welcome to Nepali</h2>
          <h2  className='text-5xl py-2 font-bold mb-4 max-w-fit type-writer text-[#FFB703]'>Flavor Dish</h2>
            <p className='text-[15px] text-[#ccc] max-w-md mb-2'>View our collection of authentic Nepali dishes, prepared with love and passion. Experience the authentic taste of Nepal in every bite.</p>
            <p className='text-[15px] text-[#ccc] max-w-md'>Discover the flavors of Nepal in every bite.Make easly at your home with our delicious Nepali dishes and enjoy a culinary experience like no other.</p>
      </div>

      {/* Right Section - Image Slideshow with animation */}
      <div className='img-rounded relative h-[220px] w-[220px] sm:w-[350px] sm:h-[350px] object-cover overflow-hidden border-1 border-yellow-500 shadow-lg'>
        <div className="w-full h-full absolute">
          {images.map((img, index) => (
            <img key={index} src={img} alt={titles[index]} style={{ animationDelay: `${index * 5}s` }} className="w-full h-full object-cover absolute opacity-0 animate-imageFade"/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
