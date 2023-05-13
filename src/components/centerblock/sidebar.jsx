import { useEffect, useState } from 'react'

function SideBarItem({ props }) {
  const [image, setImage] = useState(
    { background: { background: '#313131' } }
 )
 const [alt, setAlt] = useState('')
  const emulation = () => {
    setImage({
      img: `img/playlist0${props}.png`,
      background: { background: '#313131' },
    })
    setAlt("day's playlist")
  }

  useEffect(() => {
    const element = document.querySelector('.sidebar__item')
    setTimeout(() => {
      element.addEventListener('load', emulation())
    }, 3000)
  })
  return (
    <div className="sidebar__item" style={image.background}>
      <a className="sidebar__link" href="#">
        <img className="sidebar__img" src={image.img} alt={alt} />
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
