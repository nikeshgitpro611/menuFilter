import React from 'react'
import MenuItems from './MenuItems';

const Menu = ({items}) => {
  // console.log('items : ', items);
  return (
    <div className='section-center'>
      {items.map((menuItem)=>{
       return <MenuItems key={menuItem.id} {...menuItem}/>
      })}
    </div>
  )
}

export default Menu