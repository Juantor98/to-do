import { useState } from "react"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList"

function App() {
  const [tareas, setTareas] = useState([])
  const [tarea, setTarea] = useState([])

  return (
    <div className="container mx-auto mt-20"> 
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          tarea={tarea}
          tareas={tareas}
          setTareas={setTareas}
        />
        <TaskList 
          tareas={tareas}
          setTarea={setTarea}
        />
      </div>
    </div>
  )
}

export default App
