import React from 'react'
import Recipecard from '../components/Recipecard';
import { getRandomColor } from '../lib/utils';

const Favoritespage = () => {
  const  favorite = JSON.parse(localStorage.getItem('favorite')) || []
  return (
    <div className='bg-white flex-1 p-10 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>
        <p className='font-bold text-3xl md:text-5xl my-4'>My Favorites</p>
        
        {
           favorite.length === 0 && (
            <div className='h-[80vh] flex flex-col items-center gap-4'>
            <img src="/404.svg" className='h-3/4' alt="" />
            </div>
           )
        }
        
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {favorite.map((recipe)=>(
                <Recipecard key={recipe.title} recipe={recipe} {...getRandomColor()} />
              ))}
         </div>
      </div>
    </div>
  )
}

export default Favoritespage
