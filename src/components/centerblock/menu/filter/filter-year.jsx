import { useEffect, useRef, useState } from 'react'
import DropMenuYear from '../dropmenu/dropmenu-year'
import styles from '../dropmenu/dropmenu.module.css'
import { tracks } from '../../../music.data'

const Count = () => {
  return (
    <span className={styles.dropMenuActiveRound}>
      {tracks.filter((track) => track.year.length).length}
    </span>
  )
}

function FilterYear() {
  const divRef = useRef()
  const [status, setStatus] = useState('none')

  const clickOut = (e) => {
    const hasDiv = document.querySelector('.button-year')
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
      className={`filter__button button-year _btn-text ${
        status === 'block' ? styles.dropMenuActive : ''
      }`}
      onClick={clickOut}
    >
      {' '}
      {status === 'block' ? <Count /> : ''}
      <div ref={divRef} style={{ display: status, position: 'absolute' }}>
        <DropMenuYear />{' '}
      </div>
      году выпуска
    </div>
  )
}
export default FilterYear
