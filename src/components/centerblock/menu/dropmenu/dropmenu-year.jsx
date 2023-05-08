import { tracks } from '../../../music.data'
import styles from './dropmenu.module.css'

function PlayTime({ year }) {
  return (
    <div className={styles.dropMenuList}>
   {year}
    </div>
  )
}

const DropMenuYear = () => {
  return (
    <div className={styles.dropMenu}>
      {tracks.map((track) => (
        <PlayTime key={track.id} year={track.year}>
          {track.year}
        </PlayTime>
      ))}
    </div>
  )
}
export default DropMenuYear
