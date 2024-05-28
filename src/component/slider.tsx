import React from 'react'
import { MdDelete } from "react-icons/md";
import { PiPencilSimpleFill } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFileArrowUp } from "react-icons/fa6";
import { useTheme } from '../context/themeContext'
const Slider = () => {
    const {allTheme} = useTheme();
    const x = new Array(5).fill('')
    return (
        <div className='absolute w-[300px] bg-slate-600 h-[calc(100vh-100px)] z-[1] left-0 top-[100px] rounded-tr-md border-r-2 slider-for-animation' style={{backgroundColor:`${allTheme.slider}`}}>
            <div className='h-[calc(100%-130px)] w-full grid gap-[3px]  justify-center overflow-y-auto'>
               <div> {x.map(()=>(
                    <div className='flex justify-between w-[280px] rounded-md border-2 h-10 bg-darkHover items-center pl-2 pr-2 mt-1'>
                        <FaFileArrowUp size={23}/>
                        <p className='line-clamp-1 flex-grow cursor-pointer text-[19px] pl-1 w-[10px]'>{'index.js hello sir ka halba so i'}</p>
                        <span>
                            <button><PiPencilSimpleFill size={20} color='black' /></button>
                            <button><MdDelete size={22} color='#ef4444'/></button>
                        </span>
                    </div>
                ))}
                </div>
            </div>
            <div className='w-full pl-2 pr-2 h-[130px]'>
                <label htmlFor='file-input'  className='border-2 p-[6px] rounded-md w-full flex text-[17px] gap-1 items-center ' style={{ backgroundColor: '#4ade80' }}><FaFileArrowUp size={27}/> Open FIle</label>
                <input type='file' id="file-input" className='hidden'/>
                <label className='border-2 rounded-md w-full flex text-[17px] gap-1 items-center p-[6px]' style={{ backgroundColor: '#4ade80' }}><MdOutlineFileDownload size={27}/> Download File</label>
                <button className='border-2 rounded-md w-full  text-center text-[17px] p-[6px]' style={{ backgroundColor: '#4ade80' }}>New File</button>
            </div>
        </div>
    )
}

export default Slider
