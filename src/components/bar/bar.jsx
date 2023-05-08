import NavBurger from './burger/navburger'
import { menuList } from '../music.data'

export function MenuList(status) {
  return (
    <div className="nav__menu menu" style={{ display: { status } }}>
      <section className="menu__list">
        <div className="menu__item">
          <MenuItem />
        </div>
      </section>
    </div>
  )
}

function Logo() {
  return (
    <div className="nav__logo logo">
      <img className="logo__image" src="img/logo.png" alt="logo"></img>
    </div>
  )
}

export function MenuItem() {
  return (
    <ul>
      {menuList.map((paragraph) => (
        <li key={paragraph.id}>
          <a href={paragraph.menuItemLink}>{paragraph.menuItemName}</a>
        </li>
      ))}
    </ul>
  )
}

function Bar() {
  return (
    <nav className="main__nav nav">
      {' '}
      <Logo />
      <NavBurger />
    </nav>
  )
}

export default Bar
