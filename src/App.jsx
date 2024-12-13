import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Homepage from './page/Homepage'
import { Route, Routes } from 'react-router-dom'
import Favoritespage from './page/Favoritespage'
const App = () => {

  return (
    <div className='flex'>
       <Sidebar/>
       <Routes>
       <Route path='/' element={<Homepage/>} />
       <Route path='/favorite' element={<Favoritespage/>}/>
       </Routes>
    </div>
  )
}

export default App
