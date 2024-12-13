import React, { useState } from 'react'
import { Heart, HeartPulse, Soup } from 'lucide-react'
const Recipecard = ({recipe,bg,badge}) => {
    const [isfavorite,setIsfavorite] = useState(localStorage.getItem('favorite')?.includes(recipe.title));
    
    const addrecipetofavorite = () => {
        let favorite = JSON.parse(localStorage.getItem('favorite')) || [];
        const isrecipealreadyinfav = favorite.some((fav) => fav.title === recipe.title);

        if(isrecipealreadyinfav){
            favorite = favorite.filter((fav) => fav.title !== recipe.title);
            setIsfavorite(false);
        }
        else{
            favorite.push(recipe);
            setIsfavorite(true)
        }
        localStorage.setItem('favorite',JSON.stringify(favorite));
    }
    return (
    <>
     <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
            <a
             href={`https://www.youtube.com/results?search_query=${recipe.title} recipe`}
             target='_blank'
             className='relative h-32'>
                <div className='skeleton absolute inset-0' />
                <img src={recipe.image_url} className="rounded-md h-full w-full object-cover cursor-pointer opacity-0 transition-opacity duration-500 " alt="" 
                onLoad={(e)=> {
                  e.currentTarget.style.opacity = 1;
                  e.currentTarget.previousElementSibling.style.display = "none";
                }}
                />
                <div className='absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm'>
                    <Soup size={16} />𝓲 𝓵𝓸𝓿𝓮 𝓲𝓽(❤️'◡'❤️)
                </div>
                <div className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'
                onClick={(e) => {
                    e.preventDefault()
                    addrecipetofavorite();
                }}>
                   {!isfavorite && < Heart size={20} className='hover:fill-red-500 hover:text-red-500'/>}
                   {isfavorite && <Heart size={20} className='fill-red-500 text-red-500'/>}
                </div>
            </a>
            <div className='fle mt-1'>
                <p className='font-bold tracking-wide'>{recipe.title}</p>
            </div>
            <p className='my-2'>{recipe.publisher}</p>
            <div className='flex gap-2 mt-auto'>
                <div className={`flex gap-1 cursor-pointer ${badge} items-center p-1 rounded-md`}>
                    <HeartPulse size={16}/>
                    <span className='text-sm tracking-tighter font-semibold'>Tasty 😋 </span>
                </div>
                <div className={`flex gap-1 cursor-pointer ${badge} items-center p-1 rounded-md`}>
                    <HeartPulse size={16}/>
                    <span className='text-sm tracking-tighter font-semibold'>Stay-healthy</span>
                </div>
            </div>
        </div>
    </>
       
  )
}

export default Recipecard
