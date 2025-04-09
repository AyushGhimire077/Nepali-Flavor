import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './components/About'
import Footer from './components/Footer'
import ContactUs from './components/Contact'
import Auth from './components/Auth'
import { ToastContainer } from 'react-toastify'
import AddRecipe from './components/AddRecipe'
import RecipePage from './pages/RecipePage'
import RecipeDetails from './pages/RecipeDetails'


const App = () => {

    const isRecipeDetailPage = useLocation().pathname.startsWith('/recipe/');

  return (
    <div>
      <ToastContainer className='absolute top-5 right-4' />
      {/* Always show if not on recipe detail page */}
      {!isRecipeDetailPage && <Navbar />}
       {!isRecipeDetailPage &&   <hr className="border=[1px] border-[#ccc] w-[80%] mx-auto mb-4 shadow-[5px] shadow-[#9e9888]" />}

           {/* Routes to different pages */}
           <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path='/auth' element={<Auth />} />
              <Route path='/receipes' element={<RecipePage />} />
              <Route path='/recipe/:id' element={<RecipeDetails />} />
              <Route path='/add-receipes' element={<AddRecipe />} />
        </Routes>
        {/* Footer */}
        <Footer />
    </div>
  )
}

export default App