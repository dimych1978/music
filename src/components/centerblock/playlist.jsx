import { useEffect, useRef, useState } from 'react'

function PlayList({ title, span, author, album, time }) {
  const titleRef = useRef()
  const spanRef = useRef()
  const authorRef = useRef()
  const albumRef = useRef()
  const timeRef = useRef()

  const [backgroundColor, setBackgroundColor] = useState('#313131')
  const [widthFirst, setWidthFirst] = useState(' 64% ')
  const [widthSecond, setWidthSecond] = useState(' 25%')
  const [widthThird, setWidthThird] = useState(' 25%')
  const [height, setHeight] = useState('19px')

  const [hRef, setHRef] = useState('')

  const context = () => {
    setBackgroundColor('')
    setWidthFirst('')
    setWidthSecond('')
    setWidthThird('')
    setHeight('')
    setHRef('/img/icon/sprite.svg#icon-note')
  }

  useEffect(() => {
      window.addEventListener('load', context())
      titleRef.current.textContent = title
      spanRef.current.textContent = span
      authorRef.current.textContent = author
      albumRef.current.textContent = album
      timeRef.current.textContent = time
  })

  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div
            className="track__title-image"
            style={{
              backgroundColor: backgroundColor,
              width: '51px',
              height: '51px',
            }}
          >
            <svg className="track__title-svg" alt="music">
              <use xlinkHref={hRef}></use>
            </svg>
          </div>
          <div
            className="track__title-text"
            style={{
              backgroundColor: backgroundColor,
              width: widthFirst,
              height: height,
            }}
            ref={titleRef}
          >
            <a className="track__title-link" href="http://">
              <span className="track__title-span" ref={spanRef}></span>
            </a>
          </div>
        </div>
        <div
          className="track__author"
          style={{
            backgroundColor: backgroundColor,
            width: widthSecond,
            height: height,
          }}
          ref={authorRef}
        >
          <a className="track__author-link" href="http://"></a>
        </div>
        <div
          className="track__album"
          style={{
            backgroundColor: backgroundColor,
            width: widthThird,
            height: height,
          }}
          ref={albumRef}
        >
          <a className="track__album-link" href="http://">
          </a>
        </div>
        <div
          className="track__time"
          style={{
            width: '0',
            backgroundColor: backgroundColor,
          }}
          ref={timeRef}
        >
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text"></span>
        </div>
      </div>
    </div>
  )
}

export default PlayList
