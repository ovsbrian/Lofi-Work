 import { FaCheck, FaTrash } from 'react-icons/fa';

export const Task = ({ Text }) => {
  return (
    <li className="flex justify-between items-center p-4 bg-white shadow rounded-md mb-2">
      <span>Tarea 2</span>
      <div>
        <button className="text-green-600 hover:text-green-800 mr-2">
          <FaCheck />
        </button>
        <button className="text-red-600 hover:text-red-800">
          <FaTrash />
        </button>
      </div>
    </li>
  );
};
