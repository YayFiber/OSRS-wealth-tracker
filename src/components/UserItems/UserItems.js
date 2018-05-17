import React, { Component } from 'react'
import numberCleaner from '../../Data/numberCleaner'
import itemsList from '../../Data/ObjectDatalist'
import './UserItems.css'

const UserItems = (props) => {
  const netChange = () => {
    const totalSpent = props.items.reduce((total, item) => {
      return parseInt(item.buyPrice) + total
    }, 0)

    const totalValue = props.items.reduce((total, item) => {
      return total + parseInt(numberCleaner(item.item.current.price))
    }, 0)

    return totalValue - totalSpent
  }

  const priceChangeCheck = (price) => {
    return price >= 0 ? 'positive' : 'negative'
  }

  const displayItems = props.items.map(item => {
    return( 
      <tr className='itemContainer'>
        <td className='tdItem'>{item.item.name} &nbsp; <img src={item.item.icon} /> </td>
        <td className='tdDescription'>{item.item.description}</td>
        <td className='tdBuyPrice'>{parseInt(item.buyPrice).toLocaleString()}</td>
        <td className='tdCurrentPrice'>{numberCleaner(item.item.current.price).toLocaleString()}</td>
        <td className='tdComparison'>
        {(numberCleaner(item.item.current.price) - numberCleaner(item.buyPrice)).toLocaleString()}</td>
        <td className='deleteItem' onClick={() => props.removeItem(item)}>Delete</td>
      </tr>
    )
  })

  const itemCheck = () => {
    return displayItems.length === 0 ? 
      <h4>You haven't added any items yet!</h4> :
      <div>
        <h4> Since you purchased your items, your total tracked wealth has changed by <span className={priceChangeCheck(netChange())}> {netChange().toLocaleString()} </span> </h4>
        <hr />
        <table>
          <tr>
            <th>Item</th>
            <th>Item description</th>
            <th>Your buy price</th>
            <th>Current Price</th>
            <th>Change</th>
            <th>Remove Item</th>
          </tr>
          {displayItems}
        </table>
      </div>
  }

  return (
    <div>
      {itemCheck()}
    </div>
  )
}

export default UserItems