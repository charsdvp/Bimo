import { useEffect, useState } from 'react'
// creamos un array de los dias de la semana y meses
const DAYWEEK = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]

export const useDate = () => {
  // creamos un estado para controlar la fecha
  const [currentTime, setCurrentTime] = useState(new Date())
  // lanzamos un efecto que contiene un setInterval para actualizar nuestra fecha
  useEffect(() => {
    const timeInterval = setInterval(() => {
      // actualizamos nuestro estado
      setCurrentTime(new Date())
    }, 1000)
    // limpiamos nuestra suscripcion
    return () => {
      clearInterval(timeInterval)
    }
  }, []) // se ejecutara solo una vez, cuando se monte el componente

  // decalaramos nuestras variables que nos ayudaran a tener los distintos datos de nuestra fecha
  const time = currentTime.toLocaleTimeString()
  const dayWeek = DAYWEEK[currentTime.getDay()]
  const currentDay = currentTime.getDate()
  const month = MONTHS[currentTime.getMonth()]
  const year = currentTime.getFullYear()

  return {
    time,
    dayWeek,
    currentDay,
    month,
    year
  }
}
