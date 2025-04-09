import React from 'react'
import Hero from '../components/Hero'

const Home = () => {
  return (
  <div className='flex flex-col'>
      <div>
        <Hero />  
      </div>
      {/* more info */}
    <div className='flex max-w-full w-[90%] h-[80vh] m-auto flex-col md:flex-row items-center justify-center p-10 gap-20'>

        <div className='hidden sm:flex w-[600px] h-[600px] justify-center items-center'>
              <img className='water-effect w-[400px] h-[400px] rounded-full object-cover' src="https://media.istockphoto.com/id/505020568/photo/kitchen-table-in-a-rustic-style.jpg?s=612x612&w=0&k=20&c=sfDRoFgmKCclsQ7nJEW0LGOjnybBzj78dR6_x0e-I9Y=" alt="" /> 
        </div>

      <div className='flex-1 w-fit pb-9 text-center md:text-left'>
          <h2 className='text-4xl sm:text-5xl py-2 max-w-fit font-bold text-[#1C82AD] mb-3'>Preventing Tradations</h2>
  
            <p className='text-[15px] text-[#ccc] max-w-md mb-2'>Providing a platform for Newari cuisine to thrive in the digital age. We're preserving these flavors before they fade into obscurity,
             creating a bridge between tradition and modernity. Allowing Newari cuisine to thrive in the digital age. People can now see the
            recepie of the Newari cuisine and can make it at their home. Aslo allow pepole to share their recepie.</p>
            <p className='text-[15px] text-[#ccc] max-w-md'> The Newari community's distinct cuisine, a culinary heritage at risk in our digital age.Our mission is to preserve these flavors before they
            fade into obscurity, creating a bridge between tradition and modernity.</p>
      </div>

    </div>
  </div>
  )
}

export default Home