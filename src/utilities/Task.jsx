import { FaCheck, FaTrash } from 'react-icons/fa';
import { CheckCircle2, Circle, X } from 'lucide-react';
import { useState } from 'react';
export const Task = ({text,id,deleteToDo}) =>{

    const[circle, setCircle] = useState(false)

    return(
    <li className="flex  items-center p-4 py-4 bg-white shadow rounded-md mb-4 mx-1">
        <div className='flex items-center'>
            <button  onMouseEnter={()=> setCircle(true)}  onMouseLeave={() => setCircle(false)} id={id+"check"} className="text-[#467BD5] pr-4">
                 {circle ?  <CheckCircle2 />  :  <Circle />}   
            </button>
        </div>
        
        <div className=' flex justify-between w-full'>
            <span>{text}</span>
            <button id={id+"trash"} onClick={()=>deleteToDo(id)} className="text-red-600 hover:text-red-800">
            <X  strokeWidth={1.25} />
            </button>
        </div>
    </li>
    )
}


