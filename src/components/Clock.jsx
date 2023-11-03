import { useDate } from '../hooks/useDate'

export const Clock = () => {
  // desestructuramos todos nuestros datos que nos retorna useDate
  const { time, dayWeek, currentDay, month, year } = useDate()
  return (
    <div className="container-time">
      <span style={{ fontFamily: 'monospace' }}>{time}</span>
      <small>{`${dayWeek} ${currentDay} de ${month} de ${year}`}</small>
    </div>
  )
}
