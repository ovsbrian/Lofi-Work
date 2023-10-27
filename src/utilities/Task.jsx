import { CheckCircle2, Circle, X } from 'lucide-react';
import { useState } from 'react';
export const Task = ({text,id,deleteToDo,sendCheck}) =>{

    const[circle, setCircle] = useState(false)
    const [showDelete, setShowDelete] = useState(false);
    return(
    <li onMouseEnter={()=> setShowDelete(true)}  onMouseLeave={() => setShowDelete(false)} className="flex  items-center  bg-white shadow rounded-md mb-4 mx-1">
        <div className='flex items-center px-4'>
            <button onClick={()=>sendCheck(id)}  onMouseEnter={()=> setCircle(true)}  onMouseLeave={() => setCircle(false)} className="text-[#467BD5]">
                {circle ?  <CheckCircle2 />  :  <Circle />}   
            </button>
        </div>
        
        <div className=' flex  w-full'>
            <span>{text}</span>
        </div>
        <div className=' flex  flex-col h-16 p-2'>
            <button onClick={()=>deleteToDo(id)} className={`text-neutral-500 hover:text-neutral-950 hover:text-9xl  transition-all duration-300 ${showDelete ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <X  strokeWidth={1.25} />  
            </button>
        </div>
    </li>
    )
}


