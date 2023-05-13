import { MenuItem } from '../bar'
import BurgerLine from './burgerline'
import { useState } from 'react'

function NavBurger() {
  const [status, setStatus] = useState('none')
  const hideStatus = () => {
    setStatus(status === 'inline-block' ? 'none' : 'inline-block')
  }
  return (
    <section>
      <div className="nav__burger burger" onClick={hideStatus}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </div>
      <div>
        <div style={{ display: status, position: 'absolute' }}>
          <MenuItem />
        </div>
      </div>
    </section>
  )
}
export default NavBurger
