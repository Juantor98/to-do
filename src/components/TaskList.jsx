import { Task } from "./Task";

export const TaskList = ({tareas, setTarea}) => {

return (
    <div className="md:w-1/2 lg:2/5 mx-5 mb-10 md:h-screen overflow-scroll">
        {tareas && tareas.length ? (
            <>
                <h2 className="font-black text-3xl text-center mb-10">
                    Mis tareas pendientes
                </h2>
                {tareas.map((tarea) => {
                    return(
                        <Task 
                            key={tarea.id}
                            tarea={tarea}
                            setTarea={setTarea}
                        />
                    )
                })}        
            </>
        ) : (
            <h2 className="font-black text-3xl text-center mb-10">
                No tengo tareas pendientes
            </h2>
        )}
    </div>
    );
};
