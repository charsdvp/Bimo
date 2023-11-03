import PropTypes from 'prop-types'
import { useState } from 'react'
const initialState = {
  id: null,
  title: '',
  description: '',
  color: ''
}

export const FormTask = ({ onNewTask }) => {
  const [dataForm, setDataForm] = useState(initialState)
  // desestructuramos nuestro estado
  const { title, description, color } = dataForm
  // podemos controlar el estado de cada input
  const handleChange = ({ target }) => {
    const { name, value } = target
    setDataForm({
      ...dataForm,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (title.length <= 0 || description <= 0) return
    // creamos un nuevo objeto con las propiedades de la task
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      color
    }
    onNewTask(newTask)
    // limpiamos los campos del form
    setDataForm({
      id: null,
      title: '',
      description: '',
      color
    })
  }

  return (
    <form className='container-form' onSubmit={onSubmit}>
        <input onChange={handleChange} type='text' value={ title } name='title' placeholder='Task 1' autoComplete='off' className='container-form-title'/>
        <input onChange={handleChange} type='text' value={ description } name='description' placeholder='Description...' autoComplete='off' className='container-form-description'/>
        <div className="containter-form-colors">
          <input onChange={handleChange} type='radio' value='#056f70' name='color' id='blue' />
          <input onChange={handleChange} type='radio' value='#ef6476f8' name='color' id='pink' />
          <input onChange={handleChange} type='radio' value='#d26a0a' name='color' id='orange' />
          <input onChange={handleChange} type='radio' value='#2cbe6ec4' name='color' id='green' />
          <input onChange={handleChange} type='radio' value='#563684'name='color' id='purpure' />
        </div>
        <input type="submit" value="Agregar" className='btn-add'/>
      </form>
  )
}

FormTask.propTypes = {
  onNewTask: PropTypes.func
}
