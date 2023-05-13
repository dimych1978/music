import { useEffect, useRef, useState } from 'react'
import DropMenuAuthor from '../dropmenu/dropmenu-author'
import styles from '../dropmenu/dropmenu.module.css'
import { tracks } from '../../../music.data'

const Count = () => {
  return (
    <span className={styles.dropMenuActiveRound}>
      {tracks.filter((track) => track.author.length).length}
    </span>
  )
}

function FilterAuthor() {
  const divRef = useRef()
  const [status, setStatus] = useState('none')

  const clickOut = (e) => {
    const hasDiv = document.querySelector('.button-author')
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
      className={`filter__button button-author _btn-text ${
        status === 'block' ? styles.dropMenuActive : ''
      }`}
      onClick={clickOut}
    >
      {status === 'block' ? <Count /> : ''}
      <div ref={divRef} style={{ display: status, position: 'absolute' }}>
        <DropMenuAuthor />
      </div>
      исполнителю
    </div>
  )
}
export default FilterAuthor
