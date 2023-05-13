import { useEffect, useRef, useState } from 'react'
import DropMenuGenre from '../dropmenu/dropmenu-genre.jsx'
import styles from '../dropmenu/dropmenu.module.css'
import { tracks } from '../../../music.data.js'

const Count = () => {
  return (
    <span className={styles.dropMenuActiveRound}>
      {tracks.filter((track) => track.genre.length).length}
    </span>
  )
}

function FilterGenre() {
  const divRef = useRef()
  const [status, setStatus] = useState('none')

  const clickOut = (e) => {
    const hasDiv = document.querySelector('.button-genre')
    if (e.target !== hasDiv) {
      setStatus('none')
    } else {
      setStatus('block')
    }
  }

  useEffect(() => {
    window.addEventListener('click', clickOut)
    return () => {
      window.removeEventListener('click', clickOut)
    }
  }, [])

  return (
    <div
      className={`filter__button button-genre _btn-text ${
        status === 'block' ? styles.dropMenuActive : ''
      }`}
      onClick={clickOut}
    >
     
      {status === 'block' ? <Count /> : ''}
      <div ref={divRef} style={{ display: status, position: 'absolute' }}>
        <DropMenuGenre />
      </div>
      жанру
    </div>
  )
}
export default FilterGenre
