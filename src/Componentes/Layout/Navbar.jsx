import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';


export const NavBar= () =>{
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const handleClick = () => {
        setIsDarkMode(!isDarkMode);
        // Aca agregamos luego el cambio de colores para la app
    };

    return(
            <nav className='w-full border-b-2 border-gray-950 '>
                <div className="flex justify-between items-center w-full px-6 py-4">
                    <h1 className='navbar-brand'>Mi Sitio</h1>
                   <div>
                   <button onClick={handleClick} className='p-2 rounded-full bg-gray-300 dark:bg-gray-900'>
                        {isDarkMode ? <FaSun className='text-yellow-500' /> : <FaMoon className='text-gray-600' />}
                    </button>
                   </div>
                </div>
                
            </nav>
    )
}