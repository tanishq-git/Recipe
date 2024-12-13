import {Search} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Recipecard from '../components/Recipecard'
import { getRandomColor } from '../lib/utils'
const Homepage = () => {
  const [loading,setLoading] = useState(true)
  const [data,Setdata] = useState()
  const fetchrecipes = async (searchquery) => {
    setLoading(true)
    try {
			const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchquery}`);
			const data = await res.json();
      Setdata(data.recipes)
      console.log(data)
		} catch (error) {
			console.log(error.message);
		}
     finally {
			setLoading(false);
		}
  }
  console.log("data",data)
  useEffect(()=>{
    fetchrecipes('pizza')
  },[])
  
  const handlesubmit = (e) => {
    e.preventDefault();
    fetchrecipes(e.target[0].value);
  }

  return (
    <div id='top' className='p-10 bg-[#faf9fb] flex-1'>
        <div className='max-w-screen-lg mx-auto'>
        <form onSubmit={handlesubmit}>
            <label  className='input shadow-md flex items-center gap-2 '>
                <Search size={"24"}/>
                <input type="text" 
                className='text-sm md:text-md grow'
                placeholder='what do you want to cook today'/>
            </label>
        </form>
        <h1 className='font-bold text-3cl md:text-5xl mt-4'>
            Recommended recipes
        </h1>
        <a href="#down" className='ml-[70vw]'>Go↓</a>
        <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>
        popular choices
        </p>
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

        {!loading &&
						data.map((recipe, index) => (
              <Recipecard key={index} recipe={recipe}  {...getRandomColor()} />
						))}

        {loading &&
						[...Array(9)].map((_, index) => (
							<div key={index} className='flex flex-col gap-4 w-full'>
								<div className='skeleton h-32 w-full'></div>
								<div className='flex justify-between'>
									<div className='skeleton h-4 w-28'></div>
									<div className='skeleton h-4 w-24'></div>
								</div>
								<div className='skeleton h-4 w-1/2'></div>
							</div>
						))}
           </div>
        </div>
        <h1 className="text-black" >𝓉𝒶𝓃𝒾𝓈𝒽𝓆</h1>
        <a id='down' href="#top" className='ml-[70vw]'>Go↑</a>
    </div>
  )
}

export default Homepage
