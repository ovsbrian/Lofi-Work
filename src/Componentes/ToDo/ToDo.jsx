import { Navbar } from '@nextui-org/react';
import { Search } from 'lucide-react';
import { NavBar } from '../Layout/Navbar';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { Task } from '../../utilities/Task';



export const ToDo = () => {





    let aceptar = document.getElementById("aceptar")

    
    
  








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
                            <input id="SendTask" className="h-10 rounded-l-md  w-full  bg-slate-500  focus:outline-none text-gray-50 pl-2"  placeholder="Buscar" type="text"/>

                            <button onClick={Todoinput} id="aceptar" className=" h-10 flex justify-center items-center bg bg-slate-600 rounded-r-md  p-1 px-3  border-none hover:bg-slate-800"> <Search color="white" size={18}/> </button>
                        </div>
                    </section>
                    <section className="mt-5 mx-5">
                        <ul>
                            <Task/>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}


function Todoinput() {

   let task = document.getElementById("SendTask").value

   if (localStorage.getItem("ArrayTask")) {

    let ArrayTask = JSON.parse(localStorage.getItem("ArrayTask")) 
    console.log("trae a "+ ArrayTask);
    ArrayTask.push(task)
    localStorage.setItem("ArrayTask", JSON.stringify(ArrayTask))


   }else{
    let ArrayTask =[]
    ArrayTask.push(task)
    localStorage.setItem("ArrayTask", JSON.stringify(ArrayTask))
   }







}


