import React from 'react';
import { Day, Night, Verticle } from '../svg/svg'
const Body = () => {
  return (
    <div className='bg-gray-300 h-[calc(100vh-3.5rem)] w-screen b'>
      <div className='flex w-screen h-12 rounded-t-lg justify-start items-center'>
        <Verticle />
        <Day />
        <Night />
        <select name="cars" id="cars" className='border-none outline-none rounded-sm size- w-18'>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className='h-[calc(100vh-6.5rem)] w-screen flex'>
        <textarea className='bg-slate-500 w-1/2 h-[calc(100vh-6.5rem)] resize-none outline-none'>ddddd</textarea>
        
        <div className='bg-slate-900 w-1/2 h-[calc(100vh-6.5rem)]'></div>

      </div>
    </div>
  )
}

export default Body
