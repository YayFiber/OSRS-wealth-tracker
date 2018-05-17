const addUserItem = (item, buyPrice) => {
  return {
    type: 'ADD_USER_ITEM',
    item,
    buyPrice
  }
}

const removeUserItem = (item) => {
  return  {
    type: 'REMOVE_USER_ITEM',
    uniqueID: item.uniqueID
  }
}

export {
  addUserItem,
  removeUserItem
}