import FilterAuthor from './filter-auhthor'
import FilterYear from '../filter/filter-year'
import FilterGenre from '../filter/filter-genre'

function Filter() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по: </div>
      <FilterAuthor />
      <FilterYear />
      <FilterGenre />
    </div>
  )
}
export default Filter
