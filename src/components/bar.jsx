import { menuList } from './music.data';

function NavBurger() {
  return (
    <div className="nav__burger burger">
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </div>
  );
}

function MenuList() {
  return (
    <div className="nav__menu menu">
      <section className="menu__list">
        <div className="menu__item">
          <MenuItem />
        </div>
      </section>
    </div>
  );
}

function Logo() {
  return (
    <div className="nav__logo logo">
      <img className="logo__image" src="img/logo.png" alt="logo"></img>
    </div>
  );
}

function MenuItem() {
  return (
    <ul>
      {menuList.map((paragraph) => (
        <li key={paragraph.id}>
          <a href={paragraph.menuItemLink}>{paragraph.menuItemName}</a>
        </li>
      ))}
    </ul>
  );
}

function Bar() {
  return (
    <nav className="main__nav nav">
      {' '}
      <Logo />
      <NavBurger />
      <MenuList />{' '}
    </nav>
  );
}

export default Bar;
