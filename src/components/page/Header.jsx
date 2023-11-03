import { Star } from '../../assets/Star'

export const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <h1>Bimo</h1>
        <a href='https://github.com/charsdvp/Bimo/tree/main' target='_blank' className='stars' rel="noreferrer" style={{ textDecoration: 'none' }}><Star /> Github</a>
      </nav>
    </header>
  )
}
