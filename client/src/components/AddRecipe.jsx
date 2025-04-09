import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddRecipe = () => {

  //backend url
  const backendUrl = "http://localhost:8000";
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    preparation: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  //Handing recipe submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`${backendUrl}/api/add-receipes`, {
      title: formData.title,
      description: formData.description,
      ingredients: formData.ingredients,
      preparation: formData.preparation,
      category: formData.category
    }, { withCredentials: true });

    if (data.success) {
      toast.success(data.message);
      setFormData({
        title: '',
        description: '',
        ingredients: '',
        preparation: '',
        category: ''
      });
    } 
    else {
      toast.error(data.message);
    }

  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#DDE6ED] mb-2">Share Your Culinary Creation</h2>
          <p className="text-[14px] sm:text-lg text-[#9DB2BF]">Fill in the details of your delicious recipe</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-6">
            {/* Recipe Title */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#DDE6ED]">Recipe Title</label>
              <input
                name="title"
                placeholder="e.g., Grandma's Apple Pie"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#526D82] rounded-xl text-[#DDE6ED] bg-[#27374D] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#DDE6ED]">Category</label>
              <input
                name="category"
                placeholder="e.g., Desserts, Vegetarian"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#526D82] rounded-xl text-[#DDE6ED] bg-[#27374D] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#DDE6ED]">Description</label>
              <textarea
                name="description"
                placeholder="A heartwarming dessert perfect for family gatherings..."
                value={formData.description}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-4 py-3 border border-[#526D82] rounded-xl text-[#DDE6ED] bg-[#27374D] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Ingredients */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#DDE6ED]">Ingredients</label>
              <textarea
                name="ingredients"
                placeholder="• 2 cups flour\n• 3 medium apples\n• 1 cup sugar"
                value={formData.ingredients}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-[#526D82] rounded-xl text-[#DDE6ED] bg-[#27374D] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 font-mono text-sm"
              />
            </div>

            {/* Preparation Steps */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#DDE6ED]">Preparation Steps</label>
              <textarea
                name="preparation"
                placeholder="1. Preheat oven to 375°F\n2. Mix dry ingredients..."
                value={formData.preparation}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-[#526D82] rounded-xl text-[#DDE6ED] bg-[#27374D] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 m-auto">
            <button
              type="submit"
              className="w-fit px-20 py-4 bg-gradient-to-r bg-cyan-800 hover:bg-cyan-900 text-white font-bold rounded-full transition-all duration-400 shadow-lg hover:shadow-xl"
            >
               Publish Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
