import Content from './content/content'
import Filter from './menu/filter/filter'
import Search from './menu/search/search'
import styles from './centerblock.module.css'
import stylesParents from '../main.module.css'

function H2() {
  return <h2 className={styles._h2}>Треки</h2>
}

function Centerblock() {
  return (
    <div className={stylesParents._centerblock}>
      <Search />
      <H2 />
      <Filter />
      <Content />
    </div>
  )
}

export default Centerblock
