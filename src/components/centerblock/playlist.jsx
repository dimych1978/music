// import {  useEffect, useState } from 'react'

import { useEffect } from "react"
import { useState } from "react"

function PlayList({ title, span, author, album, time }) {
  const [emulation, setEmulation] = useState({
    background: 'content-box',
    paddingRight: '28px',
    backgroundColor: '#313131',
  })

  useEffect(()=>  {
    window.addEventListener('load', setEmulation())
  })

  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title" style={ emulation }>
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {title}
              <span className="track__title-span">{span}</span>
            </a>
          </div>
        </div>
        <div className="track__author" style={ emulation }>
          <a className="track__author-link" href="http://">
            {author}
          </a>
        </div>
        <div className="track__album" style={ emulation }>
          <a className="track__album-link" href="http://">
            {album}
          </a>
        </div>
        <div className="track__time" style={ emulation }>
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text">{time}</span>
        </div>
      </div>
    </div>
  )
}

export default PlayList
