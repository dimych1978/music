import Content from '../content'
import Filter from './filter/filter'

function Search() {
  return (
    <div className="centerblock__search search">
      <SearchIcon />
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      ></input>{' '}
    </div>
  )
}

function SearchIcon() {
  return (
    <svg className="search__svg">
      <use xlinkHref={'/img/icon/sprite.svg#icon-search'}></use>
    </svg>
  )
}

function H2() {
  return <h2 className="centerblock__h2">Треки</h2>
}





function Centerblock() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <H2 />
      <Filter />
      <Content />
    </div>
  )
}

export default Centerblock
