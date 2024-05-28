import React from 'react';
import { useTheme } from '../context/themeContext';
import Editors from './editor';
import {useLanguage}  from '../context/selectLanguage';
import { Day, Night } from '../svg/svg';
import { LuFiles } from "react-icons/lu";
import { usechangetheme } from '../hook/changeTheme';
import Slider from './slider';
const Body = () => {
  const { allTheme,setAllTheme  } = useTheme();
  const {lan,setLan}  = useLanguage()
  const {change} = usechangetheme({ allTheme, setAllTheme })
  const changeLan = (e:any)=>{
    setLan({...lan,language:e.target.value})
  }
  return (
    <div className=' h-[calc(100vh-3.5rem)] w-screen '>
      <div className='h-11 flex items-center pl-1 gap-[2px] border-t-2 border-b-2' style={{ backgroundColor: allTheme.body, borderColor: allTheme.borderColor }}>
        <button className='bg-blue-400 h-full p-1 pl-2 pr-2 rounded'><LuFiles size={25}/></button>
        <Slider/>
        <button className='bg-blue-400 h-full pl-2 pr-2 rounded' onClick={change}>{allTheme.textColor==="black"  ?<Night/>: <Day/>}</button>
        <select onChange={changeLan} name="language"  className='bg-blue-400  outline-none  text-white rounded-sm h-full pl-2 pr-2'>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="html">HTML</option>
        </select>
        <button className='bg-blue-400  rounded-sm h-full pl-6 pr-6 text-lg text-white'>Run</button>
      </div>
      <div className='h-[calc(100vh-6.3rem)] w-screen flex flex-wrap'>
        <Editors />
        <div className=' w-[30%]  h-full max-md:w-screen max-md:h-1/2 border-t-[1px]' style={{ backgroundColor: allTheme.body, color: allTheme.textColor,borderColor: allTheme.borderColor }}></div>
      </div>
    </div>
  )
}

export default Body
