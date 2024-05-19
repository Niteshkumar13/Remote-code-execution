import React, { useState } from 'react'
import { Verticle, Day, Night, Cross } from '../svg/svg';
import {useTheme} from '../context/themeContext';
import { changetheme } from '../hook/changeTheme';
const Header = () => {
  const {allTheme} = useTheme()
  const {chnage} = changetheme()
  const [showSlider, setShowSlider] = useState(false)
  return (
    <div className='w-screen h-14 flex justify-center items-center' style={{ backgroundColor: allTheme.header }}>
      <div className='flex w-screen h-12 rounded-t-lg justify-start items-center'>
        <label className='pl-2' onClick={e => setShowSlider(true)}><Verticle color={allTheme.textColor} /></label>
        {showSlider && <div className='absolute top-0  w-[300px] h-screen border-r-2' style={{ backgroundColor: allTheme.slider,borderColor:allTheme.borderColor}}>
          <div className='w-full flex justify-end pr-4 pt-4'><label onClick={e => setShowSlider(false)}><Cross color={allTheme.textColor} /></label></div>
          <div className={`mt-4 w-full flex items-center h-11 border-t-2 border-b-2 justify-between pl-3 pr-3 hover:${allTheme.hoverColor}`} style={{borderColor:allTheme.borderColor}}>
            <span className='text-xl' style={{color:allTheme.textColor}}>{allTheme.textColor==="black"  ?"Dark": "Light"}</span>
            <button className=' rounded-full p-1' onClick={chnage}>{allTheme.textColor==="black"  ?<Night/>: <Day/>}</button>
          </div>
          <div className={`w-full flex items-center h-11 border-b-2 justify-between pl-3 pr-3 hover:${allTheme.hoverColor}`} style={{borderColor:allTheme.borderColor}}>
            <a style={{color:allTheme.textColor}} href='/'>Help</a>
          </div>
        </div>}
      </div>
      <div className='w-[98%] h-12  flex justify-end mr-2'>
        <img src='https://portfolio-fronted-two.vercel.app/static/media/WhatsApp_Image_2023-10-23_at_4.06.05_PM-removebg-preview.e8fb3b740caa42ee144f.png' className='max-h-12 min-w-min rounded-full' />
      </div>
    </div>
  )
}

export default Header;
