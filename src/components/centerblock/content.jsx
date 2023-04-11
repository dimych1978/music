import { tracks } from '../music.data';
import PlayList from './playlist';

function TimeIcon() {
  return (
    <svg className="playlist-title__svg" alt="time">
      <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
    </svg>
  );
}

function Content() {
  return (
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <TimeIcon />
        </div>
      </div>
      <div className="content__playlist playlist">
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
  );
}
export default Content;
