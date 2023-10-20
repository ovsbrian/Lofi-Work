import { FaCheck, FaTrash } from 'react-icons/fa';
import { CheckCircle2, Circle, X } from 'lucide-react';
import { useState } from 'react';
export const Task = ({text,id,deleteToDo}) =>{

    const[circle, setCircle] = useState(false)
    const [showDelete, setShowDelete] = useState(false);
    return(
    <li onMouseEnter={()=> setShowDelete(true)}  onMouseLeave={() => setShowDelete(false)} className="flex  items-center  bg-white shadow rounded-md mb-4 mx-1">
        <div className='flex items-center px-4'>
            <button  onMouseEnter={()=> setCircle(true)}  onMouseLeave={() => setCircle(false)} id={id+"check"} className="text-[#467BD5]">
                {circle ?  <CheckCircle2 />  :  <Circle />}   
            </button>
        </div>
        
        <div className=' flex  w-full'>
            <span>{text}</span>
        </div>
        <div className=' flex  flex-col h-16 p-2'>
            <button id={id+"trash"} onClick={()=>deleteToDo(id)} className="text-neutral-500 hover:text-neutral-950 hover:text-9xl">
                {showDelete ? <X  strokeWidth={1.25} />  : <></>   }
            </button>
        </div>
    </li>
    )
}


