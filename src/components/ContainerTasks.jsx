import PropTypes from 'prop-types'
import 'animate.css'
import { BtnClose } from '../assets/BtnClose'

// recibimos las tasks actualizadas, la funcion que recibira como parametro su id y en este caso sera su payload
export const ContainerTasks = ({ tasks, handleDeleteTask }) => {
  return (
    <section className="section-container-tasks">
          {
            tasks.map(task => (
              <div key={task.id} className="container-task animate__animated animate__pulse" style={{ background: `${task.color}`, border: `1px solid ${task.color}` }}>
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
  )
}

ContainerTasks.propTypes = {
  tasks: PropTypes.array,
  handleDeleteTask: PropTypes.func
}
