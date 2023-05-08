import { useEffect, useState } from 'react'

function SideBarItem({ props }) {
  const [image, setImage] = useState('')

  const emulation = () => {
    setTimeout(() => setImage(`img/playlist0${props}.png`), 3000)
  }
  useEffect(() => {
    const element = document.querySelector('.sidebar__item')
    element.addEventListener('load', emulation())
  })

  return (
    <div className="sidebar__item" style={{ background: '#313131' }}>
      <a className="sidebar__link" href="#">
        <img
          className="sidebar__img"
          // onLoad={clearTimeout(setImage)}
          src={image}
          alt="day's playlist"
        />
      </a>
    </div>
  )
}

function SideBar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Dmitrii.Bashkatov</p>
        <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SideBarItem props={1} />
          <SideBarItem props={2} />
          <SideBarItem props={3} />
        </div>
      </div>
    </div>
  )
}

export default SideBar
