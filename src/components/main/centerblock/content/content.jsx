import { tracks } from '../../../music.data'
import PlayList from './playlist/playlist'
import stylesParents from '../centerblock.module.css'
import styles from './content.module.css'
import stylesCol from './playlist/playlist-title/playlist-title..module.css'

function TimeIcon() {
  return (
    <svg className={stylesCol._svg} alt="time">
      <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
    </svg>
  )
}

function Content() {
  return (
    <div className={stylesParents._content}>
      <div className={styles._title}>
        <div className={`${stylesCol._col} ${stylesCol.col01}`}>Трек</div>
        <div className={`${stylesCol._col} ${stylesCol.col02}`}>ИСПОЛНИТЕЛЬ</div>
        <div className={`${stylesCol._col} ${stylesCol.col03}`}>АЛЬБОМ</div>
        <div className={`${stylesCol._col} ${stylesCol.col04}`}>
          <TimeIcon />
        </div>
      </div>
      <div className={styles._playlist}>
        {tracks.map((track) => (
          <PlayList
            key={track.id}
            author={track.author}
            title={track.title}
            span={track.span}
            album={track.album}
            time={track.trackTime}
          />
        ))}
      </div>
    </div>
  )
}
export default Content
