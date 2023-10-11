 
 
import { CornerDownRight } from 'lucide-react';
import { NavBar } from '../Layout/Navbar';
 

import { Task } from '../../utilities/Task';
import { useState } from 'react';


export const ToDo = () => {

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
 