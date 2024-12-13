import { Heart, Home } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div>
      <Desktopsidebar/>
      <Mobilesidebar/>
    </div>
  )
}

export default Sidebar

const Desktopsidebar = () => {
    return (
        <div className='p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block'>
            <div className='flex flex-col gap-20 sticky top-10 left-0'>
                    <div className='w-full'>
                        <img src="/logo.svg" className='hidden md:block' alt="" />
                        <img src="/mobile-logo.svg" className='block md:hidden' alt="" />
                    </div>
                    <ul className='flex flex-col itmes-center md:items-start gap-8'>
                        <Link to={"/"} className='cursor-pointer flex gap-1' >
                        {/* <Home/> */}
                        <Home size={"24"} />
                        <span className='font-bold hidden md:block'>Home</span>
                        </Link>
                        <Link to={"/favorite"} className='cursor-pointer flex gap-1' >
                        {/* <Home/> */}
                        <Heart size={"24"} />
                        <span className='font-bold hidden md:block'>Heart</span>
                        </Link>
                        <Link className='cursor-pointer items-center flex gap-1' to={'https://forkify-api.herokuapp.com/phrases.html'}>
                        <i style={{fontSize:"20px",fontWeight:"medium"}} class="ri-search-line"></i>
                         <span className='font-bold hidden md:block'>Options</span>
                        </Link>
                    </ul>
            </div>
        </div>
    )
}

const Mobilesidebar = () => {
    return (
        <div className='flex justify-center items-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden' >
           <Link to={"/"}>
           <Home size={"24"} className='cursor-pointer' />
           </Link>
           <Link to={"/favorite"}>
           <Heart size={"24"} className='cursor-pointer'/>
           </Link>
           <Link to={'https://forkify-api.herokuapp.com/phrases.html'}>
           <i style={{fontSize:"26px",fontWeight:"medium"}} class="ri-search-line "></i>
           </Link>
        </div>
    )
}