import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { recipes } from '../assets/assetsInfo';
import { FaSearch } from 'react-icons/fa';

const RecipePage = () => {
  // State to control search visibility and input value
  const [isShow, setIsShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to generate random height class
  const getRandomHeight = (index) => {
    const heights = ['h-48', 'h-64', 'h-80', 'h-96'];
    return heights[index % heights.length];
  };

  const navigate = useNavigate();

  // Toggle search input visibility
  const showSearch = () => {
    setIsShow(!isShow);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter recipes based on search query
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="bottom-8 max-w-full sm:w-[40%] relative flex justify-center  items-center">
        {/* Search Icon */}
        <FaSearch className="w-6 h-6 absolute left-3 top-2 z-30 text-gray-500 cursor-pointer transition-all duration-300 ease-in-out transform group-hover:scale-110" onClick={showSearch}/>
        
        {/* Search Input */}
        {isShow && (
          <input type="text" className="-top-2.5 bottom-9 h-12 z-20 p-4 pl-12 w-full bg-blue-100 border border-gray-300 rounded-lg mt-2 absolute outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" placeholder="Search recipes..." value={searchQuery} onChange={handleSearchChange}/>
        )}
      </div>

      {/* Recipe Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-[#0F0F0F] p-6 rounded-xl shadow-lg text-white mb-6 transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              <div className="relative group">
                <img src={recipe.image} alt={recipe.name} className={`w-full ${getRandomHeight(index)} object-cover rounded-lg transform group-hover:brightness-110 transition-all duration-300`}/>
                <h2 className="text-2xl font-bold mt-4 mb-2">{recipe.name}</h2>
              </div>
              
              <p className="text-gray-300 mb-4 line-clamp-3">{recipe.description} . . .</p>
              
              <Link to={`/recipe/${recipe.id}`} className="inline-block bg-cyan-700 hover:bg-cyan-800 text-white px-5 py-2 rounded-full transition-colors duration-500">
                View Recipe →
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default RecipePage;
