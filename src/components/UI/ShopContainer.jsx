import React from 'react'
import { items } from "../../CartItems"
import ShopItems from '../UI/ShopItems'

const ShopContainer = () => {
  return (
    <div className='section grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
        {items.map((item) => {
            return <ShopItems key={item.id} item={item} />
        })}
    </div>
  )
}

export default ShopContainer