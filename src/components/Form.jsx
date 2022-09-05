import { useState } from "react"
import { AlertError } from "./AlertError"

export const Form = ({tareas, setTareas}) => {
    const [titulo, setTitulo] = useState('')
    const [fecha, setFecha] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const [error, setError] = useState(false);

    //Validación de campos del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if([titulo, fecha, descripcion].includes('')){
            setError(true);
            return
        }
        
        setError(false);

        //Objeto de tareas
        const  objetoTareas = {
            titulo,
            fecha,
            descripcion
        }

        setTareas([...tareas, objetoTareas]);

        setTitulo('');
        setFecha('');
        setDescripcion('');
    }

  return (
    <div className='md:w-1/2 lg:2/5 mx-5'>
        <h2 
            className='font-black text-3xl text-center mb-10'>Creación de Tareas
        </h2>

        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
            {error && <AlertError mensaje='Faltan campos por diligenciar'/>}
            <div className='mb-5'>
                <label 
                    htmlFor='titulo' 
                    className='block text-gray-700 uppercase font-bold'
                    >
                        Título
                </label>
                <input 
                    id='titulo'
                    type="text" 
                    placeholder='Título de la tarea' 
                    className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor='fecha' 
                    className='block text-gray-700 uppercase font-bold'
                    >
                        Fecha
                </label>
                <input 
                    id='fecha'
                    type="date" 
                    className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'                    
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor='descripcion' 
                    className='block text-gray-700 uppercase font-bold'
                    >
                        Descripción
                </label>
                <textarea 
                    id='descripcion'
                    type="text" 
                    placeholder='Descripción de la tarea' 
                    className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>
            <input 
                type="submit"
                className='bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-700 transition-colors cursor-pointer'
                value="Crear Tarea"
            />
        </form>
    </div>
  )
}
