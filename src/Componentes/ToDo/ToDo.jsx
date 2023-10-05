import { Navbar } from '@nextui-org/react';
import { Search } from 'lucide-react';
import { NavBar } from '../Layout/Navbar';
import { FaCheck, FaTrash } from 'react-icons/fa';



export const ToDo = () => {

    return (
        <>
            <div className="w-5/12 bg-[#E3E9FF]">
                <NavBar/>
                <div className="m-1">
                    <section className="mt-4 ml-5">
                        <h1 className="flex justify-start text-lg"> To Do List</h1>
                    </section>
                    <section className='mx-5'>
                        <div className="flex justify-start items-center mt-2 ">
                            <input id="search" className="h-10 rounded-l-md  w-full  bg-slate-500  focus:outline-none text-gray-50 pl-2"  placeholder="Buscar" type="text"/>

                            <button  className=" h-10 flex justify-center items-center bg bg-slate-600 rounded-r-md  p-1 px-3  border-none hover:bg-slate-800"> <Search color="white" size={18}/> </button>
                        </div>
                    </section>
                    <section className="mt-5 mx-5">
                        <ul>
                            <li className="flex justify-between items-center p-4 bg-white shadow rounded-md mb-2">
                                <span>Tarea 1</span>
                                <div>
                                    <button className="text-green-600 hover:text-green-800 mr-2">
                                        <FaCheck />
                                    </button>
                                    <button className="text-red-600 hover:text-red-800">
                                        <FaTrash />
                                    </button>
                                </div>
                            </li>
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
                        </ul>
</section>
                </div>
            </div>
        </>
    )
}