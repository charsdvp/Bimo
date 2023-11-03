import { Header } from './components/page/Header'
import { Clock } from './components/Clock'
import { FormTask } from './components/FormTask'
import { useEffect, useReducer } from 'react'
import { tasksReducer } from './hooks/tasksReducer'
import './App.css'
import { ContainerTasks } from './components/ContainerTasks'
import { Footer } from './components/page/Footer'

// creamos una funcion que recuperara todas las tasks
const init = () => {
  return JSON.parse(localStorage.getItem('tasks')) || []
}

function App () {
  // creamos un useReducer, recibira un ( reducer, initialState, )
  // * init: Podría ser una función que se llama para inicializar el estado si es necesario. Por lo general, se usa cuando se necesita un estado inicial más complejo que un simple valor.
  const [tasks, dispatch] = useReducer(tasksReducer, [], init)
  // cada que una task cambie, lanzaremos un efecto y modificaremos el localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // creamos una funcion para agregar una task, recibimos como parametro un objeto task
  const handleNewTask = (task) => {
    // creamos un action con el tipo de accion y con nuestri dato que necesitarenos para conpletar nuestra accion
    const action = {
      type: '[Tasks] Add Task',
      payload: task
    }
    // disparamos nuestra accion
    dispatch(action)
  }
  // creamos una funcion para eliminar la task y recibimos como parametro un id
  const handleDeleteTask = (id) => {
    const action = {
      type: '[Tasks] Delete Task',
      payload: id
    }
    dispatch(action)
  }
  return (
    <>
      <Header />
      <main className='main'>
        <section className="section-container">
          <FormTask onNewTask={handleNewTask} />
          <Clock />
        </section>
        <ContainerTasks tasks={tasks} handleDeleteTask={handleDeleteTask} />
      </main>
      <Footer />
    </>
  )
}

export default App
