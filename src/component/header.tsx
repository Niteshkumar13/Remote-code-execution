import React, { FC } from 'react'
import { Code } from '../svg/svg';
import {useTheme} from '../context/themeContext';
const Header:FC = () => {
  const { allTheme} = useTheme()
  return (
    <div className='w-screen h-14 flex justify-center items-center' style={{ backgroundColor: allTheme.header }}>
      <div className='flex w-screen h-12 rounded-t-lg justify-start items-center'>
       <span className='ml-3'><Code color={allTheme.textColor}/></span>
      </div>
      <div className='w-[98%] h-12  flex justify-end mr-4'>
        <img alt='profile-pic' src='https://avatar.iran.liara.run/public/1' className='max-h-12 min-w-min rounded-full' />
      </div>
    </div>
  )
}

export default Header;
