/* Recibimos nuestro estado inicial, y nuestra accion, esta accion contenda un objeto {
      type: '[Tasks] Add Task',
      payload: task
    }
    */
export const tasksReducer = (initialState, action) => {
  // creamos un switch para los diferentes casos de nuestra acion
  switch (action.type) {
    case '[Tasks] Add Task':
      // en este caso al usar sread operator traemos de vuelta todos nuestros datos y agregamos uno nuevo con lo que traiga nuestra accion
      return [...initialState, action.payload]
    case '[Tasks] Delete Task':
      // filter devuelve un nuevo array, "no modifica nuestro array original, ya que no se debe de mutar nuestro array original" y solo filtramos los que sean diferente a nuestro id que recibimos de nuestra accion
      return initialState.filter(task => task.id !== action.payload)
    // siempre vamos a regresar un estado ya sea nuestro estado original o uno modificado
    default:
      return initialState
  }
}
