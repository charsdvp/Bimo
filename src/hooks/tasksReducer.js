export const tasksReducer = (initialState, action) => {
  // creamos un switch para los diferentes casos
  switch (action.type) {
    case '[Tasks] Add Task':
      return [...initialState, action.payload]
    case '[Tasks] Delete Task':
      return initialState.filter(task => task.id !== action.payload)
    // siempre vamos a regresar un estado ya sea nuestro estado original o uno modificado
    default:
      return initialState
  }
}
