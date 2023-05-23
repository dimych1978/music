import styles from './search.module.css'
import stylesParents from '../../centerblock.module.css'

function SearchIcon() {
    return (
      <svg className={styles._svg}>
        <use xlinkHref={'/img/icon/sprite.svg#icon-search'}></use>
      </svg>
    )
  }
  

function Search() {
    return (
      <div className={stylesParents._search}
      >
        <SearchIcon />
        <input
          className={styles._text}
          type="search"
          placeholder="Поиск"
          name="search"
        ></input>
      </div>
    )
  }
export default Search  