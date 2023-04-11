import Content from './content';

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
  );
}

function SearchIcon() {
  return (
    <svg className="search__svg">
      <use xlinkHref={'/img/icon/sprite.svg#icon-search'}></use>
    </svg>
  );
}

function H2() {
  return (
      <h2 className="centerblock__h2">Треки</h2>
  );
}

function Filter () {
  return (
          <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="filter__button button-author _btn-text">
          исполнителю
        </div>
        <div className="filter__button button-year _btn-text">году выпуска</div>
        <div className="filter__button button-genre _btn-text">жанру</div>
      </div>

  )
}

function Centerblock() {
  return (
    <div className='main__centerblock centerblock'>
      <Search />
      <H2 />
      <Filter/>
      <Content />
    </div>
  );
}

export default Centerblock;
