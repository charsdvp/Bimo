import { Header } from './components/page/Header'
import { Clock } from './components/Clock'
import './App.css'
import { FormTask } from './components/FormTask'
import { useEffect, useReducer } from 'react'
import { tasksReducer } from './hooks/tasksReducer'
import { BtnClose } from './assets/BtnClose'

const init = () => {
  return JSON.parse(localStorage.getItem('tasks')) || []
}

function App () {
  const [tasks, dispatch] = useReducer(tasksReducer, [], init)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // creamos una funcion para agregar una task, recibimos como parametro un objeto task
  const handleNewTask = (task) => {
    const action = {
      type: '[Tasks] Add Task',
      payload: task
    }
    dispatch(action)
  }

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
        <section className="section-container-tasks">
          {
            tasks.map(task => (
              <div key={task.id} className="container-task" style={{ background: `${task.color}`, border: `1px solid ${task.color}` }}>
                <div className="container-task-header">
                  <strong className='container-task-title'>{task.title}</strong>
                  <button onClick={() => handleDeleteTask(task.id)}
                  className='task-btn-close'>
                    <BtnClose />
                  </button>
                </div>
                <p className='container-task-description'>{task.description}</p>
              </div>
            ))
          }
        </section>
      </main>
    </>
  )
}

export default App
