import React, { Component } from 'react'
import './ItemPreview.css'

class ItemPreview extends Component{
  constructor(props){
    super(props)

    this.state = {
      buyPrice: 0
    }
  }

  priceChangeCheck = (price) => {
    if (price === 0) {
      return 'zeroBABY'
    }
    return price.includes('+') ? 'positive' : 'negative'
  }

  actionHandler = (e) => {
    e.preventDefault()
    this.props.addItem(this.props.item, this.state.buyPrice)
  }

  render() {
    return(
      <div className='itemPreview'> 
        <h4>{this.props.item.name}</h4>
        <img src={this.props.item.icon} />
        <p>{this.props.item.description}</p>
        <p className='currentPrice'>Current price: {this.props.item.current.price}</p>
        <p className={this.priceChangeCheck(this.props.item.today.price)}>Today's change: {this.props.item.today.price}</p>
        <p className={this.priceChangeCheck(this.props.item.day30.change)}> 30 day trend: {this.props.item.day30.change} </p>
        <p className={this.priceChangeCheck(this.props.item.day180.change)}> 180 day trend: {this.props.item.day180.change} </p>
        <hr />
        <form onSubmit={(e) => this.actionHandler(e)} >
          <h5>Add this item to your bank</h5>
          <p>How much did you buy this for?</p>
          <input
            value={this.state.buyPrice}
            type='number'
            placeholder='Add the price you bought it'
            onChange={(e) => {
              this.setState({ buyPrice: e.target.value })
            }}
          />
          <br />
          <button type='submit'>Add item to bank!</button>
        </form>
      </div>
    )
  }
}

export default ItemPreview