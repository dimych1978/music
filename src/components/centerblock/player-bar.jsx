import { trackPlay } from '../music.data';

function Prev() {
  return (
    <div className="player__btn-prev">
      <svg className="player__btn-prev-svg" alt="prev">
        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
      </svg>
    </div>
  );
}

function Play() {
  return (
    <div className="player__btn-play _btn">
      <svg className="player__btn-play-svg" alt="play">
        <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
      </svg>
    </div>
  );
}

function Next() {
  return (
    <div className="player__btn-next">
      <svg className="player__btn-next-svg" alt="next">
        <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
      </svg>
    </div>
  );
}

function Repeat() {
  return (
    <div className="player__btn-repeat _btn-icon">
      <svg className="player__btn-repeat-svg" alt="repeat">
        <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
      </svg>
    </div>
  );
}

function Shuffle() {
  return (
    <div className="player__btn-shuffle _btn-icon">
      <svg className="player__btn-shuffle-svg" alt="shuffle">
        <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
      </svg>
    </div>
  );
}

function NoteIcon() {
return (
  <div className="track-play__image">
    <svg className="track-play__svg" alt="music">
      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
    </svg>
  </div>
);
  }

function LikeIcon() {
  return (
    <div className="track-play__like _btn-icon">
      <svg className="track-play__like-svg" alt="like">
        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
      </svg>
    </div>
  );
}

function DislikeIcon() {
  return (
    <div className="track-play__dislike _btn-icon">
      <svg className="track-play__dislike-svg" alt="dislike">
        <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
      </svg>
    </div>
  );
}

function VolumeBar() {
  return (
    <div className="bar__volume-block volume">
      <div className="volume__content">
        <div className="volume__image">
          <svg className="volume__svg" alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </svg>
        </div>
        <div className="volume__progress _btn">
          <input
            className="volume__progress-line _btn"
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  );
}

function PlayData({ author, album }) {
  return (
    <div>
      <div className="track-play__author">
        <a className="track-play__author-link" href="http://">
          {author}
        </a>
      </div>
      <div className="track-play__album">
        <a className="track-play__album-link" href="http://">
          {album}
        </a>
      </div>
    </div>
  );
}

function PlayBar() {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <div className="bar__player player">
            <div className="player__controls">
              <Prev />
              <Play />
              <Next />
              <Repeat />
              <Shuffle />
            </div>
            <div className="player__track-play track-play">
              <div className="track-play__contain">
                <NoteIcon />
                {trackPlay.map((track) => (
                  <PlayData
                    key={track.id}
                    author={track.author}
                    album={track.album}
                  />
                ))}
              </div>
              <div className="track-play__like-dis">
                <LikeIcon />
                <DislikeIcon />
              </div>
            </div>
          </div>
          <VolumeBar />
        </div>
      </div>
    </div>
  );
}
export default PlayBar;
