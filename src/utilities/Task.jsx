import { FaCheck, FaTrash } from 'react-icons/fa';
export const Task = ({text,id}) =>{

    return(
    <li className="flex justify-between items-center p-4 bg-white shadow rounded-md mb-4 mx-1">
        <span>{text}</span>
        <div>
            <button id={id+"check"} className="text-green-600 hover:text-green-800 mr-2">
                <FaCheck />
            </button>
            <button id={id+"trash"}  className="text-red-600 hover:text-red-800">
                <FaTrash />
            </button>
        </div>
    </li>
    )
}