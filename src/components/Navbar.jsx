import React from 'react'
import { appleImg,bagImg,searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <div className='w-full py-5 px-5 sm:px-10  flex justify-between  items-center'>
    
    <nav className='flex w-full screen-max-width'>

      <img src={appleImg} alt='Apple' width={18} height={14}/>

      <div className='flex flex-1 justify-center max-sm:hidden '>
        {navLists.map((nav,index)=>(
          
          <div key={index} className='px-5 text-sm text-white cursor-pointer text-gray hover:text-grey transition-all'>

             {nav}
          </div>

        ))}
      </div>
      <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>

<img src={searchImg}/>
<img  src={bagImg}/>

      </div>
    </nav>
   

    </div>
  )
}

export default Navbar