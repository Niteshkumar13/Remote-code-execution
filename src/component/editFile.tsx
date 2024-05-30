import React,{useState} from 'react';
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import toast  from 'react-hot-toast';
interface Props{
    name:string,
    setEdit:React.Dispatch<number|null>
}
const EditFile = ({name,setEdit}:Props) => {
    const [names,Setname] = useState(name);
    const handleConfirm = ()=>{
        if (names === "") {
            toast.error("File name cannot be empty")
        } else if (names.length > 15) {
            toast.error("File name cannot be longer than 15 characters")
        } else if (names === name) {
            toast.error("File name cannot be the same as before")
        } else {
            setEdit(null)
    }
}
    return (
        <div>
            <input type='text' value={names} onChange={e => Setname(e.target.value)} className='width-[70%]'/>
            <span>
                <button onClick={handleConfirm}><FaCheck size={18} /></button>
                <button onClick={e => setEdit(null)}><IoClose size={22} /></button>
            </span>
        </div>
    )
}

export default EditFile
