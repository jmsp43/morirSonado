import React from 'react'
import { ShowFood } from '../../components/ShowFood'

function Menu() {
  return (
      <div className='homePageCont'>
      <div className='belowNav'>
            <h1>Menu</h1>
        <nav>
          <ul className='menuNav'>
            <li>Appetizers</li>
            <li>Entrees</li>
            <li>Combos</li>
            <li>Beverages</li>
            <li>Desserts</li>
          </ul>
        </nav>
        <ShowFood/>
      </div>
</div>
  )
}

export default Menu