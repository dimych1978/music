import { menuList } from "../../../music.data"
import styles from './menu.module.css'

function MenuItem() {
    return (
      <ul className={styles._list}>
        {menuList.map((paragraph) => (
          <li className={styles._item} key={paragraph.id}>
            <a className = {styles._link} href={paragraph.menuItemLink}>{paragraph.menuItemName}</a>
          </li>
        ))}
      </ul>
    )
  }

  export default MenuItem