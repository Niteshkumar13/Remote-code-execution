import React from 'react';
import { useTheme } from '../context/themeContext';
import Editors from './editor';
import {useLanguage}  from '../context/selectLanguage';
const Body = () => {
  const { allTheme } = useTheme();
  const {lan,setLan}  = useLanguage()
  const changeLan = (e:any)=>{
    setLan({...lan,language:e.target.value})
  }
  return (
    <div className=' h-[calc(100vh-3.5rem)] w-screen b'>
      <div className='h-11 flex items-center pl-2 gap-1 border-t-2 border-b-2' style={{ backgroundColor: allTheme.body, borderColor: allTheme.borderColor }}>
        <select onChange={changeLan} name="language"  className='bg-blue-400 outline-none text-white rounded-sm h-full pl-3 pr-3'>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
        </select>
        <button className='bg-blue-400  rounded-sm h-full pl-6 pr-6 text-lg text-white'>Run</button>
      </div>
      <div className=' h-[calc(100vh-6.3rem)] w-screen flex'>
        <Editors />
        <div className=' w-1/2  h-full max-sm:w-screen max-sm:h-1/2' style={{ backgroundColor: allTheme.body, color: allTheme.textColor }}></div>
      </div>
    </div>
  )
}

export default Body
