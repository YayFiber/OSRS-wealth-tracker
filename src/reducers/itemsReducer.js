const itemsReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_USER_ITEM' : 
      return [...state, {
        item: action.item, 
        buyPrice: action.buyPrice
      }]
      default:
        return state 
  }
} 

export default itemsReducer