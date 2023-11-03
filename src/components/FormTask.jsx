import PropTypes from 'prop-types'
import { useState } from 'react'

// creamos un estado inicial que nos ayudara a definir nuestra estructura de nuestra task
const initialState = {
  id: null,
  title: '',
  description: '',
  color: ''
}

export const FormTask = ({ onNewTask }) => {
  // creamos un estado y lo inicializamos con nuestro variable anterior de initialState
  const [dataForm, setDataForm] = useState(initialState)
  // desestructuramos nuestro estado ya que los campos que nos interesan son 3
  const { title, description, color } = dataForm
  // podemos controlar el estado de cada input
  // ya que esta funcion se ejecutara cuando escuche un cambio
  const handleChange = ({ target }) => {
    // desestructuramos e.target ya que nos interase la propiedad name y su value, en este caso el texto que le estamos ingresando
    const { name, value } = target
    // modificamos nuestro estado usando desestructuracion y usando spread operator para traer todos nuestro datos
    // de esta manera solo estamos modificando la propiedad que nos interesa
    setDataForm({
      ...dataForm,
      [name]: value
    })
  }
  // capturamos el evento submit y prevenimos su evento para no actualizar la pagina
  const onSubmit = (e) => {
    e.preventDefault()
    // validamos quelos campos no esten vacios
    if (title.length <= 0 || description <= 0) return
    // creamos un nuevo objeto con las propiedades de la task
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      color
    }
    // ejecutamos nuestra funcion y recibe un objeto task en este caso newTask sera nuestro payload
    onNewTask(newTask)
    // limpiamos los campos del form, excepto nuestro color
    setDataForm({
      ...initialState,
      color
    })
  }

  return (
    <form className='container-form' onSubmit={onSubmit}>
        <input onChange={handleChange} type='text' value={ title } name='title' placeholder='Task' autoComplete='off' className='container-form-title'/>
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
