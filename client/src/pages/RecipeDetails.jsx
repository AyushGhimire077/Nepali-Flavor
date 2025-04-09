import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { recipes } from '../assets/assetsInfo';
import { FaClock, FaUsers, FaArrowLeft } from 'react-icons/fa';
import { GiCook } from 'react-icons/gi';

const RecipeDetails = () => {
    const { id } = useParams();
    const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

    // Scroll to the top when this page is rendered
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!recipe) {
        return <div className="min-h-screen flex items-center justify-center text-2xl text-gray-600">🍳 Recipe Not Found</div>;
    }

    // Function to extract YouTube Video ID from a given link
    const getYouTubeVideoID = (url) => {
        const regex = /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|\S*?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };


    return (
        <div className="min-h-[100vh] bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Back Button */}
                <Link 
                    to="/receipes" 
                    className="mb-8 inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-all duration-300 group"
                >
                    <FaArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to Recipes</span>
                </Link>

                {/* Recipe Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">{recipe.name}</h1>
                    <div className="flex justify-center gap-6 text-gray-600">
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                            <FaClock className="h-6 w-6 text-blue-600" />
                            <span className="text-[10px] sm:text-lg font-medium">{recipe.cookTime}</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                            <FaUsers className="h-6 w-6 text-green-600" />
                            <span className="text-[10px] sm:text-lg font-medium">Easily Recipe</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                            <GiCook className="h-6 w-6 text-red-600" />
                            <span className="text-[10px] sm:text-lg font-medium">Support Local Chef</span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Image and Preparation */}
                    <div className="flex flex-col gap-2">
                        {/* Image Section */}
                        <div className="relative max-h-[400px] p-1 max-w-[500px] group m-auto overflow-hidden">
                          <div className="absolute inset-0 rounded-3xl transform rotate-1 scale-95 group-hover:rotate-0 transition-all duration-500"></div>
                             <img 
                                src={recipe.image} 
                                alt={recipe.name} 
                                className="relative z-10 w-full h-full object-contain m-auto rounded-3xl shadow-xl transform group-hover:scale-[1.01] transition-all duration-500"
                            />
                        </div>


                        {/* Preparation Steps */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center space-x-3">
                                <span className="w-3 h-8 bg-purple-600 rounded-full"></span>
                                <span>Preparation Steps</span>
                            </h2>
                            <ol className="space-y-6">
                                {recipe.preparation.map((step, index) => (
                                    <li 
                                        key={index}
                                        className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                    >
                                        <div className="flex-shrink-0">
                                            <span className="h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">
                                                {index + 1}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 flex-1 text-lg leading-relaxed">{step.trim()}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* Right Column: Ingredients and About */}
                    <div className="space-y-12">
                        {/* About Section */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center space-x-3">
                                <span className="w-3 h-8 bg-blue-600 rounded-full"></span>
                                <span>About This Recipe</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">{recipe.description}</p>
                        </div>

                        {/* Ingredients */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center space-x-3">
                                <span className="w-3 h-8 bg-green-600 rounded-full"></span>
                                <span>Ingredients</span>
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li 
                                        key={index}
                                        className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                    >
                                        <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                                            <span className="text-blue-600 font-medium">{index + 1}</span>
                                        </div>
                                        <span className="text-gray-700">{ingredient.trim()}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* youtube video */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            {recipe.youtubeLink ? (
                                <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
                                    <iframe 
                                        src={`https://www.youtube.com/embed/${getYouTubeVideoID(recipe.youtubeLink)}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        frameBorder="0"
                                        title="YouTube Video"
                                        className="absolute top-0 left-0 w-full h-full rounded-2xl"
                                    />
                                </div>
                            ) : (
                                <div className="text-center text-gray-500">No video available</div>
                            )}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
