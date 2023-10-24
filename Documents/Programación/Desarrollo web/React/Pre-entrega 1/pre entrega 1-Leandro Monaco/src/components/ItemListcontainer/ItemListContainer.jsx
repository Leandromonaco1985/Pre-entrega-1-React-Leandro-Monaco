import React from 'react'
import style from './itemlist.css'

export const ItemListContainer = (props) => {
  return (
    <h1 className='itemList'> {props.greetings}</h1>
  )
}

