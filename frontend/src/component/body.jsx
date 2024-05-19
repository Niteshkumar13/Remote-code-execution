import React from 'react';
import { useTheme } from '../context/themeContext';
const Body = () => {
  const {allTheme} = useTheme();
  return (
    <div className=' h-[calc(100vh-3.5rem)] w-screen b'>
      <div className='h-11 flex items-center pl-2 gap-1 border-t-2 border-b-2' style={{backgroundColor:allTheme.body,borderColor:allTheme.borderColor}}>
      <select name="cars" id="cars" className='bg-blue-400 outline-none text-white rounded-sm h-full pl-3 pr-3'>
          <option value="volvo">Python</option>
          <option value="saab">JavaScript</option>
          <option value="mercedes">C</option>
          <option value="audi">Rust</option>
        </select>
        <button className='bg-blue-400  rounded-sm h-full pl-6 pr-6 text-lg text-white'>Run</button>
        </div>
      <div className=' h-[calc(100vh-6.3rem)] w-screen flex'>
        <textarea style={{backgroundColor:allTheme.body,color:allTheme.textColor,borderColor:allTheme.borderColor}} className='border-r-2 w-1/2 h-full resize-none outline-none'>ddddd</textarea>
        <div className=' w-1/2  h-full' style={{backgroundColor:allTheme.body,color:allTheme.textColor}}></div>
      </div>
    </div>
  )
}

export default Body
