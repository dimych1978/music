import styles from '../nav.module.css'
import thisStyles from './logo.module.css'

function Logo() {
  return (
    <div className={styles._logo}>
      <img className={thisStyles._image} src="img/logo.png" alt="logo"></img>
    </div>
  )
}

export default Logo