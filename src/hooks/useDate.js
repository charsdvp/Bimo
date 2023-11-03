import { useEffect, useState } from 'react'
// creamos un array de los dias de la semana y meses
const DAYWEEK = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]

export const useDate = () => {
  // creamos un estado para controlar la fecha
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => {
      clearInterval(timeInterval)
    }
  }, [])

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
