<<<<<<< HEAD
// import { Navbar } from '@nextui-org/react';
=======
import { Navbar } from '@nextui-org/react';
import { CornerDownRight } from 'lucide-react';
import { NavBar } from '../Layout/Navbar';
import { Task } from '../../utilities/Task';
import { useState,useEffect } from 'react';
>>>>>>> 9e058c3e90b24596868f93b243c84d1adba2e14a

import { NavBar } from "../Layout/Navbar";
// import { FaCheck, FaTrash } from 'react-icons/fa';
import { Task } from "../../utilities/Task";
import { Search } from "lucide";

export const ToDo = () => {
  // let aceptar = document.getElementById("aceptar")

<<<<<<< HEAD
  return (
    <>
      <div className="w-5/12 bg-[#E3E9FF]">
        <NavBar />
        <div className="m-1">
          <section className="mt-4 ml-5">
            <h1 className="flex justify-start text-lg"> To Do List</h1>
          </section>
          <section className="mx-5">
            <div className="flex justify-start items-center mt-2 ">
              <input
                id="SendTask"
                className="h-10 rounded-l-md  w-full  bg-slate-500  focus:outline-none text-gray-50 pl-2"
                placeholder="Buscar"
                type="text"
              />

              <button
                onClick={Todoinput}
                id="aceptar"
                className=" h-10 flex justify-center items-center bg bg-slate-600 rounded-r-md  p-1 px-3  border-none hover:bg-slate-800"
              >
                 
              </button>
            </div>
          </section>
          <section className="mt-5 mx-5">
            <ul>
              <Task />
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

function Todoinput() {
  let task = document.getElementById("SendTask").value;

  if (localStorage.getItem("ArrayTask")) {
    let ArrayTask = JSON.parse(localStorage.getItem("ArrayTask"));
    console.log("trae a " + ArrayTask);
    ArrayTask.push(task);
    localStorage.setItem("ArrayTask", JSON.stringify(ArrayTask));
  } else {
    let ArrayTask = [];
    ArrayTask.push(task);
    localStorage.setItem("ArrayTask", JSON.stringify(ArrayTask));
  }
}
=======
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("ArrayTask")) || [])

    const addTask = () => {
        let task = document.getElementById("SendTask").value
        if (task !== "") {
            const newTask = { id: Date.now().toString(), task: task }
            let ArrayTask =[]
            if (localStorage.getItem("ArrayTask")) {
                ArrayTask = JSON.parse(localStorage.getItem("ArrayTask"))
            } 
            ArrayTask.push(newTask)
            setTasks(ArrayTask)
            localStorage.setItem("ArrayTask", JSON.stringify(ArrayTask))
        }
    }




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

                            <button onClick={addTask} id="aceptar" className=" h-10 flex justify-center items-center bg bg-slate-600 rounded-r-md  p-1 px-3  border-none hover:bg-slate-800"> <CornerDownRight color="white" size={18}/> </button>
                        </div>
                    </section>
                    <section className="mt-5 mx-5">
                        {tasks.map((item) => <Task key={item.id} text={item.task} />)}
                    </section>
                </div>
            </div>
        </>
    )
}

>>>>>>> 9e058c3e90b24596868f93b243c84d1adba2e14a
