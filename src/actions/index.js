const addUserItem = (item, buyPrice) => {
  return {
    type: 'ADD_USER_ITEM',
    item,
    buyPrice
  }
}

export {
  addUserItem
}