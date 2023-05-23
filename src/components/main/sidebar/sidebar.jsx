import { useEffect, useRef, useState } from 'react'
import stylesParents from '../main.module.css'
import styles from './sidebar.module.css'

function SideBarItem({ props }) {
  const [image, setImage] = useState({ background: { background: '#313131' } })
  const [alt, setAlt] = useState('')
  const element = useRef()
  
  const emulation = () => {
    setImage({
      img: `img/playlist0${props}.png`,
      background: { background: '#313131' },
    })
    setAlt("day's playlist")
  }
  useEffect(() => {
    const elementClass = element.current
    setTimeout(() => {
      elementClass.addEventListener('load', emulation())
    }, 3000)
  })
  return (
    <div className={styles._item} ref={element} style={image.background}>
      <a className={styles._link} href="#">
        <img className={styles._img} src={image.img} alt={alt} />
      </a>
    </div>
  )
}

function SideBar() {
  return (
    <div className={stylesParents._sidebar}>
      <div className={styles._personal}>
        <p className={styles['_personal-name']}>Dmitrii.Bashkatov</p>
        <div className={styles._avatar}></div>
      </div>
      <div className={styles._block}>
        <div className={styles._list}>
          <SideBarItem props={1} />
          <SideBarItem props={2} />
          <SideBarItem props={3} />
        </div>
      </div>
    </div>
  )
}

export default SideBar
